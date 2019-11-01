import React from 'react';

import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton
} from 'react-share';
import { CopyToClipboard } from "react-copy-to-clipboard";
import LinkIcon from "@material-ui/icons/Link";
import { SMS } from 'util/smsLinkCreator';
import { FacebookIcon, TwitterIcon, EmailIcon } from 'react-share';
import styles from '../styles/ShareBook.module.scss';

function ShareBook(props) {
  const shareUrl = `${process.env.REACT_APP_MESSENGER_URL}?ref=book_id=${props.book_id}`;

  return (
    <div className={styles.btnContainer}>
      <CopyToClipboard
        text={`${process.env.REACT_APP_MESSENGER_URL}?ref=book_id=${props.book_id}`}
        onCopy={() => {
            alert('Copied to clipboard');
        }}
        title='Copy link'
      >
        <button className={styles.linkBtn}>
            <LinkIcon />
        </button>
      </CopyToClipboard>
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
