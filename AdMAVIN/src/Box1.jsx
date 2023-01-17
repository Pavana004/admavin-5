import {useState} from 'react'
import Box2 from './Box2'

const Box1 = () => {

    const [show,setShow]=useState(false)

    return (
        <>
            <div className='cont' onClick={()=>setShow(true)}>
                <div className='secondbox'></div>
                <div className='secondbox1'></div>
                {show?<Box2 />:null}
            </div>
        </>

    )
}

export default Box1