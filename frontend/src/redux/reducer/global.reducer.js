import * as global from '../constant/global.constatnt'
const initialState = {
    isLoading:false,
    feedbacks:[]
};

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case global.ADMIN_FEEDBACK_GET_REQUESTED:
            return {
                ...state,
                isLoading: true,
                err: false,
            };
        case global.ADMIN_FEEDBACK_GET_SUCCESS:
            return {
                ...state,
                isLoading : false,
                feedbacks:action.data
            };
        case global.ADMIN_FEEDBACK_GET_ERROR:
            return {
                ...state,
                isLoading: false,
                err: true,
            };
        

            default :
              return state;
    }
};

export default globalReducer;

