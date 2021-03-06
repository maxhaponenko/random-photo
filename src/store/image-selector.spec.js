import mock from 'api/api-model'
import imageSelectorReducer, {
    addImage,
    skipImage,
    deleteImage,
    // disposeState,
    // fetchRandomImage
} from './image-selector.slice';

describe('image reducer', () => {

    const initialState = {
        isLoading: false,
        candidate: '',
        items: [],
        skipedList: []
    };

    it('should handle initial state', () => {
        expect(imageSelectorReducer(undefined, { type: 'unknown' })).toEqual({
            isLoading: false,
            candidate: null,
            items: [],
            skipedList: []
        });
    });

    it('should handle addImage', () => {
        const candidate = mock.image1
        const actual = imageSelectorReducer(initialState, addImage(candidate));

        expect(actual.items).toEqual([candidate]);
    });

    it('should handle skipImage', () => {
        const candidate = mock.image1
        const startState = { ...initialState, candidate: candidate }
        const newState = imageSelectorReducer(startState, skipImage());

        expect(newState).toEqual({
            ...startState,
            candidate: null,
            skipedList: [candidate.id]
        });
    });

    it('should handle deleteImage', () => {
        const imageObject = mock.image1
        const startState = { ...initialState, items: [ imageObject ] }
        const newState = imageSelectorReducer(startState, deleteImage(imageObject.id));

        expect(newState).toEqual({
            ...startState,
            items: []
        });
    });

});
