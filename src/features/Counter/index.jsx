import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFuture.propTypes = {
    
};

function CounterFuture(props) {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter) // counter lấy từ store

    const handleIncreaseClick = () => {
        const action = increase(); // action creator
        dispatch(action);
        console.log(action);
    }

    const handleDecreaseClick = () => {
        const action = decrease(); // action creator
        dispatch(action);
        console.log(action);
    }
    
    return (
        <div>
            counter: {counter}<br/>
            <button onClick={handleIncreaseClick}>increase</button>
            <button onClick={handleDecreaseClick}>decrease</button>
        </div>
    );
}

export default CounterFuture;