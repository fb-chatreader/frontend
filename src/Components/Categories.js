import React, {useReducer} from 'react';
import { reducer, initialState } from '../reducer';
import categories from '../dummyData';

export function Categories() {
    // const [state, dispatch ] = useReducer(reducer, initialState);
    return (
        <div className='categories-container'>
            {categories.map(cat => {
                return (
                    <div>{cat}</div>
                )
            })}
        </div>    
    )
}