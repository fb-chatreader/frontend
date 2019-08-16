import React, { useReducer } from 'react'
import { initialState, reducer } from '../reducer'

export default function RecommendationPage () {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>Recommendation Page</h1>
    </div>
  )
}

