import { useReducer, useState } from "react";

const todosReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, addTodo(action.payload.text)];
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    }
};

const addTodo = (text) => {
    return { id: Date.now(), text: text, complete: false };
}

const TodoList = () => {

    const [todos, dispatch] = useReducer(todosReducer, []);
    const [text, setText] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: { text: text } });
        setText("");
    }

    return (
        <div>
            {/* ADD_TODO */}
            <form onSubmit={handleSubmit}>
                <input onChange={e => setText(e.target.value)} type="text" value={text} />
                <button type="submit">Add todo</button>
            </form>

            {/* REMOVE_TODO/VIEW */}
            <ul>
                {todos.map((todo) => (
                    <li>
                        <span>{todo.text}</span>
                        <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: { id: todo.id } })}>Remove todo</button>
                    </li>
                ))}
            </ul>
        </div >
    );
};

export default TodoList;