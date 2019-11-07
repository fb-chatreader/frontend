import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSms } from '@fortawesome/free-solid-svg-icons';
import getMobileOperatingSystem from './findDeviceType';

export const SMS = ({ url, book: { title, author } }) => {
  const os = getMobileOperatingSystem();
  const osCharacters = {
    Android: '?',
    iOS: '&'
  };
  const body = `I thought you might like this book summary of ${title.replace(
    /[-[\]{}()*+?.,\\^$|#\s]/g,
    '\\$&'
  )} by ${author}: ${url}`;
  if (osCharacters[os]) {
    let smsUrl = `sms:${osCharacters[os]}body=${body}`;

    return (
      <a href={smsUrl}>
        <FontAwesomeIcon icon={faSms} className="fa-2x" />
      </a>
    );
  } else {
    return <div />;
  }
};
