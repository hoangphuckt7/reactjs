import React, { useEffect } from 'react';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import './App.css';
import { Switch, Link, NavLink, Route } from 'react-router-dom';
import categoryApi from './api/categoryApi';
import CounterFuture from './features/Counter';

function App() {
  useEffect(() => {
    const fechCategors = async () => {
      const categoryList = await categoryApi.getAll();
      console.log(categoryList);
    };
    fechCategors();
  }, []);
  return (
    <div className="App">
      {/* <TodoFeature /> */}
      {/* <AlbumFeature /> */}
      <p>
        <Link to="/album">album</Link>
      </p>
      <p>
        <NavLink to="/todos" activeClassName="active-menu">
          todo
        </NavLink>
      </p>
      {/* NavLink giống Link nhưng tự động sinh ra thêm class active */}
      <Switch>
        <Route path="/todos" component={TodoFeature} />
        <Route path="/album" component={AlbumFeature} />
      </Switch>
      <CounterFuture />
    </div>
  );
}

export default App;
