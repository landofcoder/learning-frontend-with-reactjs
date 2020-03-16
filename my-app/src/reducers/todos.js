const initialState ={
    todos: [],
    nextId: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return{
                todos: [
                    ...state.todos,
                    {
                        id: state.nextId + 1,
                        text: action.text,
                        completed: action.completed
                    }
                ],
                nextId: state.nextId + 1
            };
        case 'TOGGLE_TODO':
            return {
                todos: state.todos.map(todo => todo.id === action.id ? {
                    id: todo.id, text: todo.text, completed: true
                } : todo),
                nextId: state.nextId
            }
        default: return state;
    }
};