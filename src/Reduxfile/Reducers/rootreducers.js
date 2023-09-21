import {comdata,comicdata} from '../Reducers/reducers'
import {combineReducers} from 'redux'
export  const rootreducer = combineReducers({
    apidata:comdata,
    apicomicdata:comicdata

})