import React, { useContext } from 'react';
import { BookContext } from 'Providers/BooksProvider';
import styles from '../styles/CategoryMenu.module.scss';

const CategoryMenu = props => {
  const [state, dispatch] = useContext(BookContext)();
  return (
    <div className={styles.menuContainer}>
      <h3>Categories</h3>
      <ul>
        {state.categories.map(category => (
          <div
            className={styles.filterOption}
            key={category}
            onClick={() =>
              dispatch({
                type: 'SELECT_CATEGORY',
                payload: category
              })
            }
            style={{
              backgroundColor:
                state.selected === category ? 'rgba(0,0,0,0.1)' : 'initial'
            }}
          >
            {category}({state.books.filter(b => b.category === category).length}
            )
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
