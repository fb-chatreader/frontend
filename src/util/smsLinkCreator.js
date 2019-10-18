import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSms } from '@fortawesome/free-solid-svg-icons';
import getMobileOperatingSystem from './findDeviceType';

export const SMS = (props) => {
  const url = props.data;
  const os = getMobileOperatingSystem();
  if (os === 'Android') {
    let smsUrl = `sms:?body=${url}`;
    return (
      <a href={smsUrl}>
        <FontAwesomeIcon icon={faSms} className="fa-2x" />
      </a>
    );
  } else if (os === 'iOS') {
    let smsUrl = `sms:;body=${url}`;
    return (
      <a href={smsUrl}>
        <FontAwesomeIcon icon={faSms} className="fa-2x"  />
      </a>
    );
  } else {
    return console.log('NADA, NADA, NADA');
  }
};
