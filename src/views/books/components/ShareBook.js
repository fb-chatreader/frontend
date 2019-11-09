import React from 'react';

import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton
} from 'react-share';
import { SMS } from 'util/smsLinkCreator';
import CopyLinkButton from 'util/CopyLinkButton';
import { FacebookIcon, TwitterIcon, EmailIcon } from 'react-share';
import styles from '../styles/ShareBook.module.scss';

function ShareBook(props) {
  const {
    book: { id, title, author }
  } = props;
  // const shareUrl = `${process.env.REACT_APP_MESSENGER_URL}?ref=book_id=${props.book_id}`;
  const shareUrl = `${process.env.REACT_APP_URL}/singlebook/${id}`;

  return (
    <div className={styles.btnContainer}>
      <CopyLinkButton toCopy={shareUrl} />
      <FacebookShareButton url={shareUrl} className='icon-button'>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} className={styles.iconBtn}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <EmailShareButton
        url={shareUrl}
        subject={`[Book Summary] ${title} by ${author}`}
        body={`Hi, I thought you might like this books summary of ${title} by ${author}\n\nRead Book Summary:`}
        className='icon-button'
        openWindow={true}
      >
        <EmailIcon size={32} round={true} />
      </EmailShareButton>

      <div className='sms-icon-button'>
        <SMS url={shareUrl} book={{ title, author }} />
      </div>
    </div>
  );
}

export default ShareBook;
