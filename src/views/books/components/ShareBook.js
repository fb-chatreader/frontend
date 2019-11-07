import React from 'react';

import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton
} from 'react-share';
import { CopyToClipboard } from "react-copy-to-clipboard";
import LinkIcon from "@material-ui/icons/Link";
import { SMS } from 'util/smsLinkCreator';
import CopyLinkButton from 'util/CopyLinkButton';
import { FacebookIcon, TwitterIcon, EmailIcon } from 'react-share';
import styles from '../styles/ShareBook.module.scss';

function ShareBook(props) {
  const shareUrl = `${process.env.REACT_APP_MESSENGER_URL}?ref=book_id=${props.book_id}`;
  const socialQuote = 'Check out this book on ChatWise';
  const emailSubject = 'A book I thought you would like';
  const emailBody = 'I found this book on ChatWise and I think you might like it. You can read a quick summary right in the ChatWise messenger!';
  return (
    <div className={styles.btnContainer}>
      <CopyLinkButton />
      <FacebookShareButton url={shareUrl} quote={socialQuote} className={styles.iconBtn}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={socialQuote} className={styles.iconBtn}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <EmailShareButton url={shareUrl} subject={emailSubject} body={emailBody} className={styles.iconBtn}>
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
      <div className="sms-icon-button">
        <SMS data={shareUrl} />
      </div>
    </div>
  );
}

export default ShareBook;
