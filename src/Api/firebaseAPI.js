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

    static writeItem = (userId, itemId, itemName, itemPrice) => {
        // console.log(userId, code, itemName, ItemPrice)
        firebase.database().ref('items/' + itemId).set({
            userId,
            itemName,
            itemPrice
        }).then(() => {
            console.log("Inserted")
        }).catch((err) => {
            console.log("not Inserted error:", err)
        });
    }

    static readItembyId = (itemId) => {
        // return (firebase.database().ref('items/' + itemId).once('value').then(item => item).then(item => item))
        // console.log(firebase.database().collection('items').doc(itemId))
    }

    static readItem = (userId) => {
        firebase.database().ref
    }

}