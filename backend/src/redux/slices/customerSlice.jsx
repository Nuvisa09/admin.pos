import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch customers
export const fetchCustomers = createAsyncThunk('customer/fetchCustomers', async () => {
  const response = await fetch('http://localhost:5000/api/customer');
  if (!response.ok) {
    throw new Error('Failed to fetch customer');
  }
  return response.json();
});

const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default customerSlice.reducer;
