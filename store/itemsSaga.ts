import { takeLatest, put, delay } from "redux-saga/effects";
import { addItemRequest, addItemSuccess } from "./itemSlice";

function* handleAddItem(action: ReturnType<typeof addItemRequest>) {
  // simulate API delay
  yield delay(500);

  const newItem = {
    id: Date.now(),
    name: action.payload,
  };

  yield put(addItemSuccess(newItem));
}

export function* itemsSaga() {
  yield takeLatest(addItemRequest.type, handleAddItem);
}
