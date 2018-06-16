import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './rootReducers';

const configureStore = () => {
  const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware())
  );
  return store;
};

export default configureStore;
