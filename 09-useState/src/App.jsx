import React from 'react'
import { useState } from "react";

const App = () => {

const [num, setNum] = useState(0)

//  function increase(){
//     console.log('increasing...')
//    setNum(num + 1)
//  }

//   function decrease(){
//     console.log('Decreasing...');
    
//    setNum(num - 1)
//  }



  return (
    <div>
        <h1>{num}</h1>
        <button onClick={() => {setNum(num + 1)
            console.log('increasing')
        }}>increase</button>
        <button onClick={() => {setNum(num - 1)
            console.log('increasing')
        }}>decrease</button>
        <button onClick={()=>{setNum(num + 5)
            console.log('increase by 5');
        }}>increase by 5</button>
        <button onClick={()=>{setNum(num - 5)
            console.log('Decrease by 5');
        }}>Decrease by  5</button>
    </div>
  )
}

export default App