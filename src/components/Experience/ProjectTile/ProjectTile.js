import React, { Component } from 'react'
import styles from './ProjectTile.module.css'

export default class ProjectTile extends Component {
  render() {
    const title = this.props.title;
    const date = this.props.date;
    const tech = this.props.tech;
    const desc = this.props.desc;
    const img = this.props.img;
    return (
        <div className={styles.project_tile}>
            <div className={styles.text}>
              <div className={styles.projectTitle}>{title}</div>
              <div className={styles.projectDate}>{date}</div>
              <div className={styles.projectTech}>Technologies used: {tech}</div>
              <div className={styles.projectDesc}>{desc}</div>
            </div>
            <div className={styles.media}>
              <div 
              className={styles.mediabox} 
              style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              </div>
            </div>
        </div>
    )
  }
}
