import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducer';
import {recommentations} from '../dummyData';

export function RecommendationPage () {
  // const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>Recommendation Page</h1>
      <div>
        {recommentations.map(recommentation => {
          return(
            <div>{recommentation}</div>
          )
        })}
      </div>
    </div>
  )
}

