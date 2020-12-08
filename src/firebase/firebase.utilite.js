import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config={
        apiKey: "AIzaSyAXoSd1NVZIs5Uwa0X561VSXDqOzqSuznQ",
        authDomain: "ebook-db.firebaseapp.com",
        projectId: "ebook-db",
        storageBucket: "ebook-db.appspot.com",
        messagingSenderId: "67754128658",
        appId: "1:67754128658:web:e64936599f4a3a986aefcb",
        measurementId: "G-8X8PJLMGC5"
      };

      export const createUserProfileDocument = async(userAuth,additionalData)=>{
        if(!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();

        if(!snapShot.exists){
          const { displayName,email} = userAuth;
          const createdAt = new Date();

          try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            })

          } catch(error){
             console.log(error); 
          }
        }
        return userRef;
      };

firebase.initializeApp(config);

export const auth =firebase.auth();
export const firestore =firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () =>auth.signInWithPopup(provider);

export default firebase;

