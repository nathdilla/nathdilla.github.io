import React, { Component } from 'react';
import styles from './FunLinks.module.css';

// Your imported images
import guitarguy from '../../images/guitarguy.jpeg';
import canyon from '../../images/canyon.jpeg';
import art from '../../images/art.jpeg';
import sky from '../../images/sky.jpeg';
import worship from '../../images/worship.jpeg';

export default class FunLinks extends Component {
  render() {
    return (
      <div className={styles.funlinks}>
        <div className={styles.container1}>
          {/* Big Row */}
          <div className={styles.container2} style={{ flex: '8' }}>
            
            <div className={styles.container3}>
              <div className={styles.contentbox}
                   onClick={() => window.location.href = "/blog"}>
                {/* Background div */}
                <div
                  className={styles.bgImage}
                  style={{ backgroundImage: `url(${guitarguy})` }}
                />
                {/* Text div */}
                <div className={styles.textContent}>
                  blog 🌎
                </div>
              </div>
            </div>

            <div className={styles.container3}>
              <div className={styles.contentbox}
                   onClick={() => window.location.href = "https://github.com/nathdilla"}>
                <div
                  className={styles.bgImage}
                  style={{ backgroundImage: `url(${art})` }}
                />
                <div className={styles.textContent}>
                  GitHub 🐱
                </div>
              </div>
            </div>

            <div className={styles.container3}>
              <div className={styles.container4} style={{ flex: '2' }}>
                <div className={styles.contentbox}
                   onClick={() => window.open(process.env.PUBLIC_URL + '/files/resume.pdf', "_blank")}>
                  <div
                    className={styles.bgImage}
                    style={{ backgroundImage: `url(${canyon})` }}
                  />
                  <div className={styles.textContent}>
                    resume 🏆
                  </div>
                </div>
              </div>
              <div className={styles.container4} style={{ flex: '1' }}>
                <div className={styles.contentbox}
                    onClick={() => window.location.href = "https://www.linkedin.com/in/nathan-dilla-499aa319a/"}>
                    <div
                    className={styles.bgImage}
                    style={{ backgroundImage: `url(${worship})` }}
                  />
                  <div className={styles.textContent}>
                    LinkedIn 🤝
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smaller row */}
          <div className={styles.container2} style={{ flex: '1' }}>
            <div className={styles.contentbox}
                 onClick={() => window.location.href = "mailto:nathancdilla@gmail.com"}>
              <div
                className={styles.bgImage}
                style={{ backgroundImage: `url(${sky})` }}
              />
              <div className={styles.textContent}>
                nathancdilla@gmail.com 📧
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}