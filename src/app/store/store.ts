// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// 👉 Export kiểu RootState cho useSelector
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

