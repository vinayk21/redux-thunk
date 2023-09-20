import {legacy_createStore,compose,applyMiddleware} from 'redux'
import { rootreducer } from './Reduxfile/Reducers/rootreducers'
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const mystore = legacy_createStore(
    rootreducer,composeEnhancers(applyMiddleware(thunk))
)

export default mystore;