import React, { Component, useRef } from 'react'
import styles from './Nav.module.css'

const Nav = () => {
// Create a ref for the target component
const targetRef = useRef(null);

// Handle the click event
const scrollToComponent = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
};
return (
    <div className={styles.nav_container}>
    <span className='helvetica-small'>
        <div className={styles.nav}>
        <div className="name-nav">nathan dilla</div>
        <div className="aboutme-nav">about me</div>
        <div className="exp-nav">experience</div>
        <div className="contact-nav">contact</div>
        <div className="fun-nav">fun links</div>
        </div>
    </span>
    </div>
)
}
export default Nav
