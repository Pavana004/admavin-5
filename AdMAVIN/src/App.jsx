import { useState } from 'react'
import './App.css'




function App() {

  const [arr, setArr] = useState([]);
  const [select, setSelect] = useState("");

  const onAddClick = () => {
    const temp = [...arr];
    temp.push(temp.length + "item");
    setArr(temp)
  }
  const onRemoveClick = () => {
    const temp = [...arr];
    temp.splice(temp.length - 1, 1)
    setArr(temp)
  }
  const onRemoveAllClick = () => {
    const temp = [...arr];
    temp.splice(temp.length - "item")
    setArr(temp)
  }
  return (
    <div className="App">
      <div className='box'>
        <div className='value' onChange={() => setSelect("item-1")}>item-1</div>
        <div className='value'>item-2</div>
        <div className='value'>item-3</div>
      </div>
      <div className='add' onClick={onAddClick}>Add</div>
      <div className='remove' onClick={onRemoveClick}>Remove</div>
      <div className='remove' onClick={onRemoveAllClick}>Remove All</div>
      <div className='box'>
        {
          arr.map((res) => {
            return (
              <div className='value' >{res}</div>
            )
          })
        }
      </div>

    </div>
  )
}

export default App
