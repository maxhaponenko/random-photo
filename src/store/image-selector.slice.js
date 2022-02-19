import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ImageService } from 'api/image.service';

const initialState = {
  isSelectProcessStarted: false,
  isLoading: false,
  candidate: null,
  items: []
};

export const fetchRandomImage = createAsyncThunk(
  'image-selector/loadRandom',
  ImageService.emulateLoadImage
)

export const counterSlice = createSlice({
  name: 'image-selector',
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.items.push(action.payload)
    },
    skipImage: (state) => {
      state.candidate = null
    },
    deleteImage: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    disposeState: (state) => {
      state.isSelectProcessStarted = false
      state.isLoading = false
      state.candidate = null
      localStorage.setItem('wasDone', JSON.stringify(state))
    }
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomImage.pending, (state) => {
        state.isLoading = true;
        state.isSelectProcessStarted = true;
        console.log('fulfilled')
      })
      .addCase(fetchRandomImage.fulfilled, (state, action) => {
        state.isLoading = false
        state.candidate = action.payload
      })
  },
});

export const { addImage, skipImage, deleteImage, disposeState } = counterSlice.actions;

export const selectImages = (state) => state.imageSelector.items;
export const selectIsLoading = (state) => state.imageSelector.isLoading;

export default counterSlice.reducer;
