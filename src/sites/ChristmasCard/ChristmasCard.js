import React, { PureComponent } from 'react'
import styles from './ChristmasCard.module.css'

import Emoji from './components/Emoji'
import snow from '../../images/snow.png';
import photo from '../../images/christmasCouple.png';


export default class ChristmasCard extends PureComponent {
  render() {
    return (
        <div className={styles.absoluteContainer}>
            <div className={styles.cardContainer}>
                <div className={styles.gridContainer} style={{background: `url(${snow}) no-repeat center/cover`}}>
                    <Emoji text="🎄" />
                    <Emoji text="🎅" />
                    <Emoji text="❄️" />
                    <Emoji text="🎁" />
                    <Emoji text="🦌" />
                    <Emoji text="⛄" />
                    <Emoji text="🌟" />
                    <Emoji text="🔔" />
                    <Emoji text="🕯️" />
                    <Emoji text="🎶" />
                    <Emoji text="🕊️" />
                    <Emoji text="🎉" />
                </div>
            </div>
            <div className={styles.archText}>
                Merry Christmas, <br />
                Bella Chambers! {"<3"}
            </div>
            <img src={photo} alt="christmas couple" className={styles.photo} />
        </div>
    )
  }
}
