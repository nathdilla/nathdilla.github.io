import React, { Component } from 'react'
import styles from './Nav.module.css'

export default class Nav extends Component {
  render() {
    return (
      <div className={styles.Nav}>
        <div className={styles.logo}>nathandilla.com/blog</div>
        </div>
    )
  }
}
