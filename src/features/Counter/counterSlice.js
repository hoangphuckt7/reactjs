import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0, // giá trị khởi tạo
  reducers: {
    increase(state) {
      return state + 1;
    },
    decrease(state) {
      return state - 1;
    },
  },
});

const { actions, reducer } = counterSlice;
export const { increase, decrease } = actions; // named export
export default reducer; // reducer export
