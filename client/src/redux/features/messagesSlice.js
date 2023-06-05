import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async (userId) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/chat?userId=${userId}`,
      {
        credentials: "include",
      }
    );
    const data = await response.json();
    return data;
  }
);

const messagesSlice = createSlice({
  name: "messages",
  initialState: [],
  reducers: {
    setMessages: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setMessages } = messagesSlice.actions;
export default messagesSlice.reducer;
