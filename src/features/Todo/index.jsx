import React, {useState} from 'react'
import TodoList from './components/TodoList'

function TodoFeature(props) {
    const istodoList = [
        {
            id: 1,
            title: 'eat',
            status: 'completed'
        },
        {
            id: 2,
            title: 'sleet',
            status: 'new'
        },
        {
            id: 3,
            title: 'code',
            status: 'completed'
        },
    ];

    const [todoList, settodoList] = useState(istodoList);
    const [filteredStatus, setFilteredStatus] = useState('all');
    const handleTodoClick = (todo, index) => {
        // clone current arry to the new one
        const newTodoList = [...todoList];

        console.log(todo, index);
        //togged state
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        };
        //update todo list
        settodoList(newTodoList);
    };

    const handleShowAll = () => {
        setFilteredStatus('all');
    }
    const handleShowComplete = () => {
        setFilteredStatus('completed');
    }
    const handleShowNew = () => {
        setFilteredStatus('new');
    }
    const renderTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    return (
        <div>
            <h3>TODOLIST</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick}/>

            <div>
                <button onClick={handleShowAll}>all</button>
                <button onClick={handleShowComplete}>completed</button>
                <button onClick={handleShowNew}>new</button>
            </div>
        </div>
    )
}

TodoFeature.propTypes = {
    // todoFeature: PropTypes.array,
}

export default TodoFeature

