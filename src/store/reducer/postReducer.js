import { actions } from "../action/actions";

const INITIAL_STATE = {
    pids: [],
};

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.ADD_POST:
            return {
                ...state,
                pids: [...state.pids, action.payload.pid],
            };
        // case 'PREVIEW_POST':
        //   return {
        //     ...state,
        //     pid: action.payload.pid,
        //     featuredImage: action.payload.featuredImage,
        //     title: action.payload.title,
        //     date: action.payload.date,
        //     tags: action.payload.tags,
        //     content: action.payload.content,
        //   };
        default:
            return state;
    }
};

export default postReducer;
