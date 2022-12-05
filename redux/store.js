import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import { combineReducers } from 'redux'

import { configureStore } from '@reduxjs/toolkit'

import * as reducers from './reducers'

const combinedReducer = combineReducers(reducers)

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  }
  return combinedReducer(state, action)
}

export const store = configureStore({
  reducer,
  devTools: { trace: true },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {},
      },
      serializableCheck: false,
    }),
})

const makeStore = () => store

export const wrapper = createWrapper(makeStore)
