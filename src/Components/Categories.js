import React, {useReducer} from 'react';
import { reducer, initialState } from '../reducer';
import {categories} from '../dummyData';

export function Categories() {
    // const [state, dispatch ] = useReducer(reducer, initialState);
    console.log(typeof(categories));
    return (
        <div className='categories-container'>
            {categories.map(category => {
                return (
                    <div>{category}</div>
                )
            })}
        </div>    
    )
}