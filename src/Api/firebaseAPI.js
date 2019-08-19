import * as firebase from "firebase"

export default class firebaseAPI {
    static signInWithEmailAndPassword = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch((error) => {
                console.log(error.code, error.message)
            })
    }

    static currentLoggedInUser = () => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log('after user logged=>', user)
            if (user) {
                return user
            } else {
                return null
            }
        });
    }

    static currentLoggedInUserId = () => {
        const currentUser = firebase.auth().currentUser.uid;
        return currentUser
    }

    static logoutUser = () => {
        firebase.auth().signOut()
    }

    static writeItem = (userId, code, itemName, ItemPrice) => {
        firebase.database().ref('users/' + userId).set({
            code,
            itemName,
            ItemPrice
        });
    }

}