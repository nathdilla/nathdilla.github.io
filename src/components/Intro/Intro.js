import React from 'react';
import styles from './Intro.module.css';
import ThreeScene from '../ThreeScene/ThreeScene';

const Intro = () => {
    return (
        <div className={styles.intro}>
            <div className="content">
                <div className={styles.intro1}><span className='helvetica-med'>Hello 👋, my name is</span></div>
                <h1 className="noto-serif-display-big-text">NA<span className='stretch'>THAN</span> DILLA</h1>
                <div className={styles.intro2}><span className='helvetica-med'>and I am a <code>software engineer👨‍💻</code> based in Phoenix, AZ. 🌵</span></div>
            </div>
            <ThreeScene />
        </div>
    );
};

export default Intro;