import React, { Component } from 'react'
import styles from './Blog.module.css'

import Nav from '../../components/Blog/Nav/Nav';

export default class Blog extends Component {
  render() {
    return (
      <div className={styles.Blog}>
        <Nav />
      </div>
    )
  }
}
