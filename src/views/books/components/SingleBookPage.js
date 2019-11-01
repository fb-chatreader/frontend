import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BookContext } from 'Providers/BooksProvider';
// import { Link } from 'react-router-dom';
import ShareBook from './ShareBook';
import { CopyToClipboard } from "react-copy-to-clipboard";
import LinkIcon from "@material-ui/icons/Link";
import styles from '../styles/SingleBookPage.module.scss';

const SingleBookPage= () => {
    const [state] = useContext(BookContext)();
    const id = parseInt(useParams().id, 10);
    const book = state.books.filter(b => b.id === id)[0];
    console.log(book);
    return book ? ( 
        <div className={styles.SingleBookPage}>
            <div className={styles.header}>
                <img
                    className={styles.bookImage}
                    src={book.image_url}
                    alt="book-cover"
                />
                <h2 className={styles.titleText}>{book.title}</h2>
            </div>
            <div className={styles.footer}>
                <h4 className={styles.authorText}>By {book.author}</h4>
                <div className={styles.cardActions}>
                    <div className={styles.summaryBtn}>
                        <button
                            onClick={() =>
                                window.open(
                                `${process.env.REACT_APP_MESSENGER_URL}?ref=book_id=${book.id}`
                                )
                            }
                        >
                            Read Summary!
                        </button>
                    </div>
                    <CopyToClipboard
                        text={`${process.env.REACT_APP_MESSENGER_URL}?ref=book_id=${book.id}`}
                        onCopy={() => {
                            alert('Copied to clipboard');
                        }}
                        title='Copy link'
                    >
                        <button>
                            <LinkIcon />
                        </button>
                    </CopyToClipboard>
                    <ShareBook book_id={book.id} />
                </div>
            </div>
        </div>
    ) : (
        <p>No book found</p>
    );
}

export default SingleBookPage;
