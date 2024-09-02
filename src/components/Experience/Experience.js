import React, { Component } from 'react'
import styles from './Experience.module.css'

import ProjectTile from './ProjectTile/ProjectTile'

export default class Experience extends Component {
  render() {
    return (
      <div className={styles.experience}>
        <div className={styles.content}>
            <div className={styles.timeline}>
            <h1>Timeline</h1>
                <div className={styles.timeline_content}>

                </div>
            </div>
            <div className={styles.projects}>
            <h1>Projects</h1>
                <div className={styles.projects_content}>
                    <ProjectTile />
                </div>
            </div>
            <div className={styles.skills}>
            <h1>Skills</h1>
                <div className={styles.skills_content}>

                </div>
            </div>
        </div>
      </div>
    )
  }
}
