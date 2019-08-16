import { axiosWrapper } from '../utilities/axios';
// import history from '../history'
import React from 'react';
const postUrl = `https://archon-mail.herokuapp.com/api/send`;
const localUrl = 'http://localhost:8081/api/send';

const ALERT_INTERACTION = 'ALERT_INTERACTION';
const SENT_MESSAGE = 'SENT_MESSAGE';
const GOT_FOOTER_COORDS = 'GOT_FOOTER_COORDS'

const defaultState = {
  alertStatus: false,
  alertTemplate: null,
  footerCoords: null
};

const alertInteracted = (status, template, customStyles) => ({
  type: ALERT_INTERACTION,
  status,
  template,
  customStyles
});

export const alertInteraction = (
  status,
  template,
  customStyles
) => dispatch => {
  dispatch(alertInteracted(status, status ? template : <div />, customStyles));
};

const sentMessage = message => ({ type: SENT_MESSAGE, message });

const gotFooterCoords = footerCoords => ({
  type: GOT_FOOTER_COORDS,
  footerCoords
});

export const sendMessage = message => dispatch => {
  try {
    axiosWrapper('post', `send`, {
      ...message,
      to: 'info@hayesdevelopers.com'
    });
    dispatch(sentMessage(message));
  } catch (err) {
    console.error(err);
  }
};

export const getFooterCoords = footerCoords => dispatch => {
  dispatch(gotFooterCoords(footerCoords));
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ALERT_INTERACTION:
      return {
        ...state,
        alertStatus: action.status,
        alertTemplate: action.template,
        customStyles: action.customStyles
      };
    case SENT_MESSAGE:
      return { ...state, message: action.message };
    case GOT_FOOTER_COORDS:
      return {
        ...state,
        footerCoords: action.footerCoords
      }
    default:
      return state;
  }
}
