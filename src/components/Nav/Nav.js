import React from 'react';
import styles from './Nav.module.css';

const Nav = ({ refs, scrollToComponent }) => {
    const { aboutRef, funLinksRef } = refs;

    console.log("✅ Nav.js Loaded!");
console.log("🔥 Received refs:", refs);
console.log("🔥 Received scrollToComponent function:", scrollToComponent);

    return (
        <div className={styles.container}>
            <div className={styles.nav_container}>
                <div className={styles.home}>
                    <div className="name-nav">nathan dilla</div>
                </div>
                <div className={styles.nav}>
                <div 
                        className="aboutme-nav" 
                        onClick={(e) => {
                            console.log("🖱️ About Me Clicked!");
                            scrollToComponent(e, aboutRef);
                        }}
                    >
                        about me
                    </div>
                    <div className="exp-nav" style={{ textDecoration: 'line-through' }}>
                        experience
                    </div>
                    <div 
                        className="fun-nav"  
                        onClick={(e) => scrollToComponent(e, funLinksRef)}
                    >
                        links
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;