import {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const handleAdd = () => {
        return setCount(count + 1);
    }
    const handleReduce = () => {
        return setCount(count - 1);
    }
    const handleReset = () => {
        return setCount(0);
    }

  return (
    <div className='className="text-center"'>
      <h1 >Count: {count}</h1>
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick= {handleReduce} disabled = {count<1}>Reduce</button>
        <button onClick= {handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
