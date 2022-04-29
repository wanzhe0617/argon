import { createStore, applyMiddleware, combineReducers } from 'redux'
import getdataReducer from './redcuer/getdata'
import adduserReducer from './redcuer/uesrs'
import thunk from 'redux-thunk'
import storageSession from 'redux-persist/lib/storage/session'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist';

const allReducer = combineReducers(
    {
        getdata: getdataReducer,
        userdata: adduserReducer
    }
)

const persistConfig = {
    key: 'root',
    storage: storage,
    // whitelist:["getdataReducer","adduserReducer"],//緩存資料
    // blacklist:[]//不緩存資料
}

const persistedReducer = persistReducer(persistConfig, allReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)
export default store