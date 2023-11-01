import { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem";
import { AddBtn } from "./AddBtn";
import { LoadingSpinner } from "./LoadingSpinner";


export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(response => response.json())
            .then(data => {
                setTodos(Object.values(data));
                console.log(Object.values(data))
            })
            .catch(err => console.log(err))
            .finally(() => {

                setLoading(false)

            })
    }, []);

    const changeStatusHandler = (_id) => {

        const updatedTodos = todos.map(todo => {
            if (todo._id === _id) {
                return { ...todo, isCompleted: !todo.isCompleted }
            }
            return todo;
        })
        setTodos(updatedTodos)
    };


    return (
        <section className="todo-list-container">
            <>{loading && <LoadingSpinner />}</>
            <h1>Todo List</h1>

            <AddBtn />
            <div className="table-wrapper">

                <table className="table">
                    <thead>
                        <tr>
                            <th className="table-header-task">Task</th>
                            <th className="table-header-status">Status</th>
                            <th className="table-header-action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Todo item */}
                        {todos.map((todo) => (
                            <TodoItem
                                changeStatusHandler={changeStatusHandler}
                                _id={todo._id}
                                key={todo._id}
                                text={todo.text}
                                isCompleted={todo.isCompleted}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )

}