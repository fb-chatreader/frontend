import React from 'react';

import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton
} from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import LinkIcon from '@material-ui/icons/Link';
import { SMS } from 'util/smsLinkCreator';
import CopyLinkButton from 'util/CopyLinkButton';
import { FacebookIcon, TwitterIcon, EmailIcon } from 'react-share';
import styles from '../styles/ShareBook.module.scss';

function ShareBook(props) {
  const shareUrl = `${process.env.REACT_APP_MESSENGER_URL}?ref=book_id=${props.book_id}`;

  return (
    <div className={styles.btnContainer}>
      <CopyLinkButton />
      <div
        class="fb-share-button"
        data-href="https://chatreader.netlify.com/"
        data-layout="button_count"
      ></div>
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
