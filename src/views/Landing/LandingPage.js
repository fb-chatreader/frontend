import React from 'react';
import styles from './landing.module.scss';

const LandingPage = () => {
  return (
    <div className={styles.landingPageContainer}>
      <h1 className={styles.welcomeHeader}>
        Welcome to Chatwise
        <h3 className={styles.subheader}>
          the best way to find books and read summaries.
        </h3>
      </h1>
    </div>
  );
};

export default LandingPage;
