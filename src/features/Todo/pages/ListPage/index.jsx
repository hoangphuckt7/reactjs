import React, { useState, useEffect, useMemo } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';

function ListPage(props) {
  const istodoList = [
    {
      id: 1,
      title: 'eat',
      status: 'completed',
    },
    {
      id: 2,
      title: 'sleet',
      status: 'new',
    },
    {
      id: 3,
      title: 'code',
      status: 'completed',
    },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(istodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });
  const handleTodoClick = (todo, index) => {
    // clone current arry to the new one
    const newTodoList = [...todoList];

    // console.log(todo, index);
    //togged state
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'new' ? 'completed' : 'new',
    };
    //update todo list
    setTodoList(newTodoList);
  };

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || 'all');
  }, [location.search]);

  const handleShowAll = () => {
    // setFilteredStatus('all');
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowComplete = () => {
    // setFilteredStatus('completed');
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowNew = () => {
    // setFilteredStatus('new');
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const renderTodoList = useMemo(() => {
    return todoList.filter(
      (todo) => filteredStatus === 'all' || filteredStatus === todo.status
    );
  }, [todoList, filteredStatus]);

  const handleTodoFormSubmit = (values) => {
      console.log('form: ',values);
      const newTodo = {
        id: todoList.length + 1,
        title: values.title,
        status: 'new'
      };

      const newTodoList = [...todoList, newTodo];
      setTodoList(newTodoList);
  }
  return (
    <div>
      <h3>TODOLIST</h3>
      <TodoForm onSubmit={handleTodoFormSubmit}/>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAll}>all</button>
        <button onClick={handleShowComplete}>completed</button>
        <button onClick={handleShowNew}>new</button>
      </div>
    </div>
  );
}

ListPage.propTypes = {
  // ListPage: PropTypes.array,
};

export default ListPage;
