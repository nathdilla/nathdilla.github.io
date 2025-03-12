import React, { Component } from 'react'
import styles from './Experience.module.css'

import ProjectTile from './ProjectTile/ProjectTile'

import bibleprojectvr from '../../images/bibleprojectvr.jpg'
import deepfake from '../../images/deepfake.png'

export default class Experience extends Component {
  render() {
    return (
      <div className={styles.experience}>
        <div className={styles.content}>
        <div className={styles.compHeader}>Experience</div>
            {/* <div className={styles.timeline}>
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
            </div> */}
            <div className={styles.experienceContainer}>
              <ProjectTile title="Tom.AI ✨"
              date="Sept 2024 - Now"
              tech="NodeJS, Express, React, SQL, AWS, Redis, LangChain, Whisper, Docker, Git, Atlassian"
              desc="Teacher evaluation program to automate the process of grading teaching sessions as an observer would.
              This program's key components include a Whipser AI transcription process with added speaker diarization using
              pyannote. This transcript and a grading rubric is then fed into LangChain, a framework that gives database access
              to LLMs such as ChatGPT, allowing us to fine-tune the model to our specific use case and required output. The
              program is served, scalibly, on a web application written primarily in JavaScript."/>
              <ProjectTile title="Deepfake Detection 🕵️‍♂️"
              date="Oct 2024 - Dec 2024"
              tech="TensorFlow, OpenCV, Kaggle, LaTeX, Git"
              desc="Developed an RNN trained off of facial landmark data to detect patterns deepfaked videos.
              The data was found on Kaggle and applied data extraction techniques that utilized OpenCV haarcascade classifiers.
              Data extraction produced a csv file of coordinates of facial landmarks per frame per video. In addition, 
              data preprocessing methods were used to normalize, pad and clean. Lastly, position derivatives of landmarks
              were added to get more dynamics for the model to learn from. The model was trained on a RNN architecture,
              utilizing Bidirectional LTSM layers."
              img={deepfake}/>
              <ProjectTile title="C-Minus-Minus Compiler 💾"
              date="Sept 2024 - Dec 2024"
              tech="Flex, Bison, MIPS Assembly, QtSPIM"
              desc="This compiler is capable of performing basic arithmetic operations, declare variables, support while loops
              , define/call function with parameters, and catch several compiler errors. The tokens and protected words were defined in Flex. Context-free grammar was
              written in the Bison file. Abstract syntax tree was constructed for symmantic analysis and maintained a symbol table 
              in the form of a linked list. There is some code optimization that includes dead code elimination, constant propagation
              and constant folding. The compiler generates MIPS code that can be run in QtSPIM."/>
              <ProjectTile title="Jonah and the Whale VR 🐳"
              date="Sept 2022 - Dec 2022"
              tech="Unity, Oculus Quest, Cyber Shoes"
              desc="Gameified depiction of the events in the book of Jonah that runs on the Oculus Quest. Unity 3D was used to make
              the program, requiring the knowledge of C# and rigid version control techniques. Game connects to CyberShoes, allowing the
              user to walk in the game using their feet."
              img={bibleprojectvr}/>
            </div>
        </div>
      </div>
    )
  }
}
