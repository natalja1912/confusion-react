import { MENU_DISHES_LIST, COMMENTS, PROMOTIONS, LEADERS } from '../utils/constants';

export const initialState = {
    dishes: MENU_DISHES_LIST,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};