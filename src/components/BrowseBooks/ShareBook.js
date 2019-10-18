import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSms } from '@fortawesome/free-solid-svg-icons';

import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share';
import { BooksProvider } from '../../Providers/BooksProvider';
import { SMS } from '../../util/smsLinkCreator';
import { FacebookIcon, TwitterIcon, EmailIcon } from 'react-share';

import '../../scss/components/ShareBook.scss';

function ShareBook(props) {
  console.log('props in share');
  console.log('props in share');
  console.log('props in share');
  console.log(props);
  // console.log(BooksProvider);
  const shareUrl = `${process.env.REACT_APP_MESSENGER_URL}?ref=command=start_book,book_id=${props.data.book.id}`;
  // const shareUrl = 'erikkimsey.com';
  console.log(SMS(shareUrl));

  return (
    <div className="btn-container">
      <FacebookShareButton
        url={shareUrl}
        className="icon-button"
        onClick={() => window.open(('erikkimsey.com', '_blank'))}
      >
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TwitterShareButton
        url={shareUrl}
        className="icon-button"
        onClick={() => window.open(('erikkimsey.com', '_blank'))}
      >
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <EmailShareButton url={shareUrl} className="icon-button">
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
    </div>
  );
}

export default ShareBook;
