import { createFormEntity } from './../form-helpers.js';
import { applyCommon } from './baseController.js';
import { requester } from './../services/app-service.js';
import { triggerSuccessNotification, triggerFailNotification } from '../services/notification-service.js';


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

        let form = createFormEntity(formRef, ['username', 'password']);
        let formValue = form.getValue();

        try {
            const loggedInUser = await firebase.auth().signInWithEmailAndPassword(formValue.username, formValue.password);
            const userToken = await firebase.auth().currentUser.getIdToken();
            sessionStorage.setItem('username', loggedInUser.user.email)
            sessionStorage.setItem('userId', firebase.auth().currentUser.uid);
            sessionStorage.setItem('token', userToken);
            requester.setAuthToken(userToken);
            triggerSuccessNotification('Logged in successfully!')
            this.redirect(['#/home']);

        } catch (exception) {
            triggerFailNotification(exception.message);
        }
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

        let form = createFormEntity(formRef, ['username', 'password', 'rePassword']);
        let formValue = form.getValue();

        if (formValue.password === '' || formValue.rePassword === '') {
            triggerFailNotification('Password and repeat password fields cant be empty');
            return;
        }

        if (formValue.password !== formValue.rePassword) {
            triggerFailNotification('Password and repeat password must match')
            return;
        }

        try {
            const newUser = await firebase.auth().createUserWithEmailAndPassword(formValue.username, formValue.password);
            const userToken = await firebase.auth().currentUser.getIdToken();

            sessionStorage.setItem('username', newUser.user.email);
            sessionStorage.setItem('userId', firebase.auth().currentUser.uid);
            sessionStorage.setItem('token', userToken);

            /**
             * Updates the requester authentication token
             */
            requester.setAuthToken(userToken);

            triggerSuccessNotification('Registered successfully!')

            this.redirect(['#/home']);

        } catch (ex) {
            triggerFailNotification(ex.message);
        }
    })
}

export function logoutViewHandler() {

    sessionStorage.clear();
    firebase.auth().signOut();
    triggerSuccessNotification('Logged out successfully!')
    this.redirect(['#/home'])
}