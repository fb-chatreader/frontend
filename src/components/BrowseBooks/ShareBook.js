import React from 'react';
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, EmailIcon } from 'react-share';

import '../../scss/components/ShareBook.scss';

function ShareBook(props) {
  console.log('props in share');
  console.log('props in share');
  console.log('props in share');
  console.log(props);

  return (
    <div
      className="btnContainer"
      onClick={() => {
        console.log('sharing');
      }}
    >
      <FacebookShareButton>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TwitterShareButton _target="blank">
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <EmailShareButton target="_blank">
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
    </div>
  );
}

export default ShareBook;
