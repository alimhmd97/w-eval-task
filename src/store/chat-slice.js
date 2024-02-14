import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  msgs: [
   {text: "Welcome! We're here to assist you. Feel free to send us a message, and we'll be with you shortly.",
   isMyMessage:false}]
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMsg: (state,action) => {
      state.msgs=[...state.msgs,JSON.parse(action.payload),
        {text:"Thank you for reaching out! We've received your message and will attend to it promptly. Your patience is appreciated.",
        isMyMessage:false}
    ];

    },
    
  },
})

// Action creators are generated for each case reducer function
export const { sendMsg } = chatSlice.actions

export default chatSlice.reducer