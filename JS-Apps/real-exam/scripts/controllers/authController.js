import { createFormEntity } from './../form-helpers.js';
import { applyCommon } from './baseController.js';
import { requester } from './../services/app-service.js';

export async function loginViewHandler() {

    await applyCommon.call(this);

    if (this.loggedIn) {
        this.redirect(['#/home']);
        return;
    }

    await this.partial('./templates/auth/login.hbs');

    let formRef = document.querySelector('form');

    formRef.addEventListener('submit', async(e) => {
        e.preventDefault();

        let form = createFormEntity(formRef, ['email', 'password']);
        let formValue = form.getValue();

        const loggedInUser = await firebase.auth().signInWithEmailAndPassword(formValue.email, formValue.password);
        const userToken = await firebase.auth().currentUser.getIdToken();

        sessionStorage.setItem('username', loggedInUser.user.email)
        sessionStorage.setItem('userId', firebase.auth().currentUser.uid);

        sessionStorage.setItem('token', userToken);

        requester.setAuthToken(userToken);

        this.redirect(['#/home'])
    })
}

export async function registerViewHandler() {

    await applyCommon.call(this);

    if (this.loggedIn) {
        this.redirect(['#/home']);
        return;
    }

    await this.partial('./templates/auth/register.hbs');

    let formRef = document.querySelector('form');

    formRef.addEventListener('submit', async(e) => {
        e.preventDefault();

        let form = createFormEntity(formRef, ['email', 'password', 'rep-pass']);
        let formValue = form.getValue();

        if (formValue.password !== formValue['rep-pass']) {
            throw new Error('Password and repeat password must match');
        }

        const newUser = await firebase.auth().createUserWithEmailAndPassword(formValue.email, formValue.password);
        const userToken = await firebase.auth().currentUser.getIdToken();

        sessionStorage.setItem('username', newUser.user.email);
        sessionStorage.setItem('userId', firebase.auth().currentUser.uid);
        sessionStorage.setItem('token', userToken);

        /**
         * Updates the requester authentication token
         */
        requester.setAuthToken(userToken);

        this.redirect(['#/home']);
    })
}

export function logoutViewHandler() {

    sessionStorage.clear();
    firebase.auth().signOut();
    this.redirect(['#/login'])
}

export async function profileViewHandler() {

    await applyCommon.call(this);

    if (!this.loggedIn) {
        this.redirect(['#/index']);
        return;
    }

    this.partials.idea = await this.load('./templates/idea/idea-list-profile.hbs')

    const currentLoggedUser = sessionStorage.getItem('username');

    const myIdeas = Object.entries(await requester.ideas.getAll().then(x => x || {}))
        .filter(([_, value]) => value.creator === currentLoggedUser)
        .map(([_, value]) => { return { title: value.title } });

    this.ideasCount = myIdeas.length;

    this.ideas = myIdeas;

    await this.partial('./templates/auth/profile.hbs');
}