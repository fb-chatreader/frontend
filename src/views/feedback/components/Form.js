import React, { useState } from 'react';

import styles from '../styles/Form.module.scss';

function Form(props) {
  const [score, setScore] = useState();
  const [form, setForm] = useState({
    notes: '',
    email: props.email || ''
  });

  const renderScores = () => {
    const scores = [];

    for (let i = 1; i <= 5; i++) {
      scores.push(
        <button
          type='button'
          onClick={() => setScore(i)}
          style={{ backgroundColor: score === i ? 'goldenrod' : 'white' }}
        >
          {i}
        </button>
      );
    }
    return scores;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!score) {
      return alert('Please input a score');
    }
    // axios call to backend
    alert('AJ forgot to write the API call, better yell at him');
  };

  return (
    <form className={styles.Form} onSubmit={e => handleSubmit(e)}>
      <div className={styles.scores}>
        <p>How would you rate your experience with the Chatwise bot?</p>
        <div>{renderScores()}</div>
      </div>
      <div className={styles.input}>
        <p>Any comments you'd like to share?</p>
        <textarea
          type='text'
          value={form.notes}
          name='notes'
          onChange={e => handleChange(e)}
        />
        <p>
          We might have questions about your feedback! Care to supply an email?
        </p>
        <input
          type='text'
          value={form.email}
          name='email'
          onChange={e => handleChange(e)}
        />
        <button type='submit'>Submit Feedback</button>
      </div>
    </form>
  );
}

export default Form;
