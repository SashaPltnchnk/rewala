import { combineReducers } from 'redux';

import { ActionType, StateType } from 'typesafe-actions';


import {
  Actions as registration,
  ActionTypes as registrationActionTypes,
  epic as registrationEpic,
  reducer as registrationReducer,
} from './nested-states/registration';

import {
  Actions as login,
  ActionTypes as loginActionTypes,
  epic as loginEpic,
  reducer as loginReducer,
} from './nested-states/login';

import {
  Actions as getMe,
  ActionTypes as getMeActionTypes,
  epic as getMeEpic,
  reducer as getMeReducer,
} from './nested-states/get-me';

import {
  Actions as logout,
  ActionTypes as logoutActionTypes,
  epic as logoutEpic,
  reducer as logoutReducer,
} from './nested-states/logout';

import {
  Actions as resetPassword,
  ActionTypes as resetPasswordActionTypes,
  epic as resetPasswordEpic,
  reducer as resetPasswordReducer,
} from './nested-states/reset-password';

export const Actions = {
  registration,
  login,
  getMe,
  logout,
  resetPassword,
};

export const ActionTypes = {
  registrationActionTypes,
  loginActionTypes,
  getMeActionTypes,
  logoutActionTypes,
  resetPasswordActionTypes,
};

export const reducer = combineReducers({
  registration: registrationReducer,
  login: loginReducer,
  getMe: getMeReducer,
  logout: logoutReducer,
  resetPassword: resetPasswordReducer,
});

export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
  registrationEpic,
  loginEpic,
  getMeEpic,
  logoutEpic,
  resetPasswordEpic,
];

export type State = StateType<typeof reducer>;