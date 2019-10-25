import React from 'react';
import styles from './landing.module.scss';

const LandingPage = () => {
  return (
    <div className={styles.landingPageContainer}>
      <h1 className={styles.welcomeHeader}>Welcome to Chatwise</h1>
      <div>the best way to find books and read summaries.</div>
    </div>
  );
};

export default LandingPage;
