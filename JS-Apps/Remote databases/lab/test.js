function test() {

    const email = 'new@abv.bg';
    const password = "123456";

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(error => {

            let errorCode = error.code;
            let errorMessage = error.message;

            console.log(errorCode, errorMessage);
        })

    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {

            let errorCode = error.code;
            let errorMessage = error.message;

            console.log(errorCode, errorMessage);
        })

    firebase.auth().onAuthStateChanged((user) => {

        if (user) {
            // User is signed in.
            let displayName = user.displayName;
            let email = user.email;
            let emailVerified = user.emailVerified;
            let isAnonymous = user.isAnonymous;
            let uid = user.uid;

            console.log(displayName, email)
                // ...
        } else {
            console.log('User is signed out');
        }

    })

    firebase.auth().signOut()
        .then(() => { 
            // Sign-out successful.

            console.log('sign-out successful.')
        }).catch((error) => {
            // An error happened.
            console.log('sign-out successful.')
        });
}

test();