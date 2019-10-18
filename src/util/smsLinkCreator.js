import React from 'react';
import getMobileOperatingSystem from './findDeviceType';

export const SMS = (url) => {
  const os = getMobileOperatingSystem();
  if (os === 'Android') {
    let smsUrl = `sms:?body=${url}`;
    return <a href={smsUrl}>SMS</a>;
  } else if (os === 'iOS') {
    let smsUrl = `sms:;body=${url}`;
    return <a href={smsUrl}>SMS</a>;
  } else {
    return console.log('NADA, NADA, NADA');
  }
};
