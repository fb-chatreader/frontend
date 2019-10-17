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
    <div className="btn-container">
      <FacebookShareButton className="icon-button" onClick={() => window.open(('erikkimsey.com', '_blank'))}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TwitterShareButton className="icon-button" onClick={() => window.open(('erikkimsey.com', '_blank'))}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <EmailShareButton className="icon-button" onClick={() => window.open(('erikkimsey.com', '_blank'))}>
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
    </div>
  );
}

export default ShareBook;
