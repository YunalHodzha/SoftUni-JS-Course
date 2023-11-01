export const TodoItem = ({
    _id,
    text,
    isCompleted,
    changeStatusHandler
}) => {

    const onChangeStatusClick = () => {
        changeStatusHandler(_id);
    }

    return (<tr className={isCompleted ? 'todo is-completed' : 'todo'}>
        <td>{text}</td>
        <td>{isCompleted ? 'Complete' : 'Incomplete'}</td>
        <td className="todo-action">
            <button className="btn todo-btn" onClick={onChangeStatusClick}>Change status</button>
        </td>
    </tr>)
}