import {createStore,applyMiddleware,combineReducers} from 'redux'
import getdataReducer from './redcuer/getdata'
import adduserReducer from './redcuer/uesrs'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'

const allReducer=combineReducers(
    {
        getdata:getdataReducer,
        userdata:adduserReducer
    }
)

export default createStore(allReducer,applyMiddleware(thunk))