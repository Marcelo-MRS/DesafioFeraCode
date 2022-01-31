import { createStore, compose, applyMiddleware, Store } from 'redux';
import  Reactotron from '../config/reactotronConfig';

export default (reducers: any, middlewares: any): Store => {
  const enhancer = __DEV__
    ? compose(Reactotron.createEnhancer!(), applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
