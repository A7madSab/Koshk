import React, { Component } from 'react';
import Navigation from "./src/navigation/Navigation"
import * as firebase from "firebase"
import { firebaseConfig } from "./src/config/firebaseConfig"

import "firebase/auth"
import "firebase/firestore"

export default class App extends Component {
  constructor(props) {
    super(props)
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }

    this.state = {
      userLogged: false
    }
  }
  render() {
    return (
      <Navigation />
    );
  }
}