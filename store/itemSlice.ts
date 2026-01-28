import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Item {
  id: number;
  name: string;
  category: string;
  quantity: number;
  price: number;
  description: string;
  createdAt: string;
}

interface ItemsState {
  items: Item[];
  loading: boolean;
}

const initialState: ItemsState = {
  items: [],
  loading: false,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItemRequest(
      state,
      _action: PayloadAction<Omit<Item, "id" | "createdAt">>
    ) {
      state.loading = true;
    },
    addItemSuccess(state, action: PayloadAction<Item>) {
      state.items.push(action.payload);
      state.loading = false;
    },
  },
});

export const { addItemRequest, addItemSuccess } = itemsSlice.actions;
export default itemsSlice.reducer;
