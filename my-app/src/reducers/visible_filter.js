export  default (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'VISIBLE_FILTER':
            return action.filter;
        default:
            return state;
    }
}