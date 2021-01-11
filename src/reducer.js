import { SET_LOADING, SET_STORIES, REMOVE_STORY, HANDLE_PAGE, HANDLE_SEARCH } from "./actions";

const reducer = (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, isLoading: true };

        case SET_STORIES:
            return { ...state, isLoading: false, hits: action.payload.hits, nbPages: action.payload.nbPages };

        case REMOVE_STORY:
            return { ...state, hits: state.hits.filter((story) => story.objectID !== action.payload) };

        case HANDLE_SEARCH:
            return { ...state, query: action.payload, page: 0 };

        case HANDLE_PAGE:
            let newPage;
            if (action.payload === "dec") {
                if (state.page === 0) {
                    newPage = state.nbPages - 1;
                } else {
                    newPage = state.page - 1;
                }
            } else {
                if (state.page === state.nbPages - 1) {
                    newPage = 0;
                } else {
                    newPage = state.page + 1;
                }
            }
            return { ...state, page: newPage };

        default:
            throw new Error(`no matching "${action.type}" action`);
    }
};
export default reducer;
