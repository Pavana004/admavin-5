import { useState } from 'react'
import './App.css'
import Box1 from './Box1'


function App() {

  const [show, setShow] = useState(false)

  return (
    <>
    <button className='btn bg-danger' onClick={() => setShow(false)}>clear</button>
      <div className="App">
        <div className='initialbox' onClick={() => setShow(true)}>
          {show ? <Box1 /> : null}

        </div>

      </div>
      
    </>

  )
}

export default App