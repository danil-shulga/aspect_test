import { combineReducers, createStore } from 'redux';
import { changeValueFromStringPath } from './components/utils/changeValueFromStringPath';

const initialState = {
  path: '',
  newContent: '',
  content: [
    {
      type: 'panel',
      props: {
        width: 500,
        height: 200,
        visible: true,
      },
      content: [
        {
          type: 'panel',
          props: {
            width: 200,
            height: 150,
            visible: true,
          },
        },
        {
          type: 'button',
          props: {
            width: 100,
            height: 50,
            visible: true,
            caption: 'textButtonaaaaaaaaaa',
          },
        },
      ],
    },
    {
      type: 'label',
      props: {
        caption: 'test',
        visible: true,
      },
    },
    {
      type: 'button',
      props: {
        width: 100,
        height: 50,
        visible: true,
      },
    },
  ],
};

const contentReducer = (state = [], action) => {
  if (action.type === 'ADD_CONTENT') {
    let { path, newContent } = action.payload;

    changeValueFromStringPath(state, path, newContent);
    return [...state];
  }

  return state;
};

const newContentReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NEW_CONTENT': {
      return action.payload;
    }
    case 'CLEAR_NEW_CONTENT': {
      return '';
    }

    default:
      return state;
  }
};

const pathReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_PATH': {
      return action.payload;
    }
    case 'CLEAR_PATH': {
      return '';
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  newContent: newContentReducer,
  content: contentReducer,
  path: pathReducer,
});

export const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const addContent = (path, newContent) => ({
  type: 'ADD_CONTENT',
  payload: { path, newContent },
});

export const setPath = (path) => ({
  type: 'SET_PATH',
  payload: path,
});

export const clearPath = () => ({
  type: 'CLEAR_PATH',
});

export const setNewContent = (newContent) => ({
  type: 'SET_NEW_CONTENT',
  payload: newContent,
});

export const clearNewContent = () => ({
  type: 'CLEAR_NEW_CONTENT',
});
