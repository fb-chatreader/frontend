import React, { useState } from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";
import LinkIcon from "@material-ui/icons/Link";

import styles from './styles/CopyLinkButton.module.scss';


const CopyLinkButton = props => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => { setCopied(false) }, 3000);
    }

    return (
        <div className={styles.CopyLinkButton}>
            {copied &&
            <div className={styles.copiedModal}>
                Copied to clipboard
            </div>
            }
            <CopyToClipboard
                    text={`${process.env.REACT_APP_MESSENGER_URL}?ref=book_id=${props.book_id}`}
                    onCopy={() => {
                        // alert('Copied to clipboard');
                        handleCopy();
                    }}
                    title='Copy link'
                >
                    <button className={styles.linkBtn}>
                        <LinkIcon />
                    </button>
            </CopyToClipboard>
        </div>
    );

};

export default CopyLinkButton;