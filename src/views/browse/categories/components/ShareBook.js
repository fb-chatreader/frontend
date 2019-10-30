import React from 'react';
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share';
import { SMS } from '../../../../util/smsLinkCreator';
import { FacebookIcon, TwitterIcon, EmailIcon } from 'react-share';
import styles from '../styles/ShareBook.module.scss';

function ShareBook(props) {
  const shareUrl = `${process.env.REACT_APP_MESSENGER_URL}?ref=command=start_book,book_id=${props.data.book.id}`;

  return (
    <div className={styles.btnContainer}>
      <FacebookShareButton url={shareUrl} className="icon-button">
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} className="icon-button">
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <EmailShareButton url={shareUrl} className="icon-button">
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
      <div className="sms-icon-button">
        <SMS data={shareUrl} />
      </div>
    </div>
  );
}

export default ShareBook;
