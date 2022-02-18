import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ImageService } from 'api/image.service';

const initialState = {
  isLoading: false,
  candidate: null,
  items: []
};

export const fetchRandomImage = createAsyncThunk(
  'images/loadRandom',
  ImageService.emulateLoadImage
)

export const counterSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.items.push(action.payload)
    },
    deleteImage: (state, action) => {
      state.items = state.items.filter(item => item !== action.payload)
    }
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomImage.pending, (state) => {
        state.isLoading = true;
        console.log('fulfilled')
      })
      .addCase(fetchRandomImage.fulfilled, (state, action) => {
        state.isLoading = false
        state.candidate = action.payload.urls.regular
      })
  },
});

export const { addImage, deleteImage } = counterSlice.actions;

export const selectImages = (state) => state.images.items;
export const selectIsLoading = (state) => state.images.isLoading;

export default counterSlice.reducer;
