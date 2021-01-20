import firebase from 'firebase/app';
import 'firebase/firestore';                      //for data base
import  'firebase/auth';                          //for the auth

const config = {
    apiKey: "AIzaSyCVGNHjxTQsc9t_dTZPCU7KB5MwWg6xyvw",
    authDomain: "crwn-db-699a8.firebaseapp.com",
    projectId: "crwn-db-699a8",
    storageBucket: "crwn-db-699a8.appspot.com",
    messagingSenderId: "795505447161",
    appId: "1:795505447161:web:68424c2115e75bdf12d228",
    measurementId: "G-M6292P9R4V"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;                                             //!userAuth= true because actually is null (unsubscribeFromAuth = null;) So we it checks if userAuth is sign in if return what at this point. If it not do what it has to do to check next timewe get a new one or it someone sign in again. Other word is there is a sign in check if de user does existin our database and if it doesn't save it with the properties defined in "try{}".

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();                              //snapShot simply represent the date

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }        
    }   
    
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();                 //export it to need it in something related to authentication
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;