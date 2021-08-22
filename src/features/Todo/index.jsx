import React from 'react'
import PropTypes from 'prop-types'
import TodoList from './components/TodoList'

function TodoFeature(props) {
    // const {todoFeature} = props;
    const todoList = [
        {
            id: 1,
            title: 'eat',
        },
        {
            id: 2,
            title: 'sleet',
        },
        {
            id: 3,
            title: 'code',
        },
    ]
    return (
        <div>
            <h3>TODOLIST</h3>
            <TodoList todoList={todoList} />
        </div>
    )
}

TodoFeature.propTypes = {
    // todoFeature: PropTypes.array,
}

export default TodoFeature

