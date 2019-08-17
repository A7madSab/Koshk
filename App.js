import React, { Component } from 'react';
import Tabs from "./src/navigation/Navigation"
import * as firebase from "firebase"
import { firebaseConfig } from "./src/config/firebaseConfig"

export default class App extends Component {
  constructor(props) {
    super(props)
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Tabs />
    );
  }
}