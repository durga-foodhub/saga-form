import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import itemsReducer from "./itemSlice";
import { itemsSaga } from "./itemsSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(itemsSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
