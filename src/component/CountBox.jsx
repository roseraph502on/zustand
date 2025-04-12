import React from 'react'
import CountStore from "../stores/CountStore"


const CountBox = () => {
  {/* 기존 방식 */ }
  // const [count, setCount] = useState(0)

  // 상태 관리 Zustand
  const { count, increase, increaseBy, reset } = CountStore();

  return (
    <div className='CountBox'>
      <button className='reset' onClick={reset}>reset</button>
      <h1>count : {count}</h1>
      <div className='increase'>
        <button className='first' onClick={increase}>+</button>
        <button className='second' onClick={() => increaseBy(10)}>+ 10</button>
        <button className='third' onClick={() => increaseBy(100)}>+ 100</button>
      </div>
      <div className='decrease'>
        <button className='first' onClick={() => increaseBy(-1)}>- </button>
        <button className='second' onClick={() => increaseBy(-10)}>- 10</button>
        <button className='third' onClick={() => increaseBy(-100)}>- 100</button>
      </div>

    </div>
  )
}

export default CountBox
