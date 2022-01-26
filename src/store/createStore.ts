import { createStore, compose, applyMiddleware } from 'redux';
import  Reactotron from '../config/reactotronConfig';

export default (reducers: any, middlewares: any) => {
  const enhancer = __DEV__
    ? compose(Reactotron.createEnhancer!(), applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
