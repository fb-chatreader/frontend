function getMobileOperatingSystem() {
  // Credit: Ryan kulp @ https://www.quora.com/Has-anyone-successfully-preset-body-copy-within-a-tap-to-SMS-link/answer/Ryan-Kulp
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
    document.getElementsByTagName('body')[0].className += ' ios';
    return 'iOS';
  } else if (userAgent.match(/Android/i)) {
    document.getElementsByTagName('body')[0].className += ' android';
    return 'Android';
  } else {
    return 'non-mobile or unknown';
  }
}
export default getMobileOperatingSystem;
