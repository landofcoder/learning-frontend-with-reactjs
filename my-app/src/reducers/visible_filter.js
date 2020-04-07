export  default (state = 'SHOW_LIST', action) => {
    switch (action.type) {
        case 'VISIBLE_FILTER':
            return action.filter;
        default:
            return state;
    }
}