import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ImageService } from 'api/image.service';
import { toast } from 'react-toastify';

const initialState = {
    isLoading: false,
    candidate: null,
    items: [],
    skipedList: []
};

export const fetchRandomImage = createAsyncThunk('image-selector/loadRandom', async (payload, { getState }) => {

    let counter = 0;
    const skipedList = getState().imageSelector.skipedList

    const isInBlackList = (image, skipedList) => skipedList.some(item => item === image.id)

    sessionStorage.setItem('isSelectionProcessStarted', 'true')

    async function loadRandom() {

        if (counter > 10) {
            throw new Error(`
                Too many API requests detected.
                List of skiped images lead to repeated API calls.
                Please, clear localStorage persisted state value and try again.
            `)
        }

        const newImage = await ImageService.emulateLoadImage()

        if (isInBlackList(newImage, skipedList)) {
            counter++
            return await loadRandom()
        }

        return newImage
    }

    try {
        const newImage = await loadRandom()
        return newImage
    } catch (error) {
        toast(error.message, { type: 'error' })
    }

})

export const imageSelectorSlice = createSlice({
    name: 'image-selector',
    initialState,
    reducers: {
        addImage: (state, { payload }) => {
            state.items.push(payload)
        },
        skipImage: (state) => {
            state.skipedList.push(state.candidate.id)
            state.candidate = null
        },
        deleteImage: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        disposeState: (state) => {
            state.isLoading = false
            state.candidate = null
        }
    },

    extraReducers: {
        [fetchRandomImage.pending]: (state) => {
            state.isLoading = true;
            console.log('fulfilled')
        },
        [fetchRandomImage.fulfilled]: (state, action) => {
            state.isLoading = false
            state.candidate = action.payload
        }
    },
});

export const { addImage, skipImage, deleteImage, disposeState } = imageSelectorSlice.actions;

export const selectImages = (state) => state.imageSelector.items;
export const selectIsLoading = (state) => state.imageSelector.isLoading;

export default imageSelectorSlice.reducer;
