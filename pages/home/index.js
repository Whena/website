import React, { Component } from 'react'
import {styles} from './home.style'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <p style={styles.color}>This is a homepage</p>
      </div>
    );
  }
}
