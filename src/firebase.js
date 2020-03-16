import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
        apiKey: "AIzaSyBMrwQ9R8RLVkyl43cP25gx9BnD6RoQmaY",
        authDomain: "swiftfirebase-3e9bf.firebaseapp.com",
        databaseURL: "https://swiftfirebase-3e9bf.firebaseio.com",
        projectId: "swiftfirebase-3e9bf",
        storageBucket: "swiftfirebase-3e9bf.appspot.com",
        messagingSenderId: "438284982113",
        appId: "1:438284982113:web:de81058b67b3d581681720",
        measurementId: "G-G6FX481M41"
    }

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)  

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase