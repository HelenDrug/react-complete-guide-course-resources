import classes from './Counter.module.css';
import {useSelector, useDispatch} from "react-redux";
import {countActions} from "../store/store";

const Counter = () => {
    const counter = useSelector(state => state.count);
    const showCounter = useSelector(state => state.count.showCounter);
    const dispatch = useDispatch();

    // Handlers without using redux/toolkit
    /*const handleCounterToggle = () => {
        dispatch({type: 'toggle'});
    };

    const handleIncrement = () => {
        dispatch({type: 'increment', amount: 1});
    };
    const handleDecrement = () => {
        dispatch({type: 'decrement'});
    };

    const handleIncreaseByFive = () => {
        dispatch({type: 'increment', amount: 5});
    }*/
    // Using redux/toolkit
    const handleDecrement= () => {
        dispatch(countActions.decrement());
    }
    const handleIncrement = () => {
        dispatch(countActions.increment(1));
    }
    const handleIncreaseByFive = () => {
        dispatch(countActions.increment(5));
    }
    const handleCounterToggle = () => {
        dispatch(countActions.toggle());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <>
                <div className={classes.value}>{counter.count}</div>
                <div>
                    <button onClick={handleIncrement}>Increment</button>
                    <button onClick={handleIncreaseByFive}>Increase by 5</button>
                    <button onClick={handleDecrement}>Decrement</button>
                </div>
            </>}
            <button onClick={handleCounterToggle}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
