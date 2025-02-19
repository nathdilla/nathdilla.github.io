import React, { PureComponent } from 'react'
import styles from './Emoji.module.css'

export default class Emoji extends PureComponent {
    render() {
        const { text } = this.props;
        return (
            <div className={styles.emoji}>{text}</div>
        )
    }
}
