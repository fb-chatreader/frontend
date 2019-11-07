import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSms } from '@fortawesome/free-solid-svg-icons';
import getMobileOperatingSystem from './findDeviceType';

export const SMS = ({ url, book: { title, author } }) => {
  const os = getMobileOperatingSystem();
  const body = `I thought you might like this book summary of ${title} by ${author}: ${url}`;
  if (os === 'Android') {
    let smsUrl = `sms:?body=${body}`;
    return (
      <a href={smsUrl}>
        <FontAwesomeIcon icon={faSms} className="fa-2x" />
      </a>
    );
  } else if (os === 'iOS') {
    let smsUrl = `sms:;body=${body}`;
    return (
      <a href={smsUrl}>
        <FontAwesomeIcon icon={faSms} className="fa-2x" />
      </a>
    );
  } else {
    return <div />;
  }
};
