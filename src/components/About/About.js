import React, { Component } from 'react'
import styles from './About.module.css'
import adventure from '../../images/adventure.jpeg';
import engineer from '../../images/engineer.png';
import musician from '../../images/musician.jpeg';

export default class About extends Component {
  render() {
    return (
      <div className={styles.aboutme}>
        <div className={styles.content}>
          <h2 className="helvetica-large">About Me</h2>
          <p className="helvetica-small">
            Christ follower, software engineer, and musician. I enjoy making things and being creative.
            On weekends, I have fun playing electric guitar in my worship team and attending local/large concerts
            in my city. I also like to go on adventures outdoors as well as within my house, have thought provoking conversations
            and eat good food.</p>
            <div className={styles.images}>
                <img src={musician} alt="adventure time" width="30%" />    
                <img src={engineer} alt="adventure time" width="30%" />    
                <img src={adventure} alt="adventure time" width="30%" />    
            </div>        
        </div>
      </div>
    )
  }
}
