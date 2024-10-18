import { useState } from "react"


function App(){
  const [color,setColor]=useState("Olive")
  return(
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap 
      justify-center bottom-12 insert-x-0 px-2">
        <div className="flex flex-wrap justify-center 
        gap-3 shadow-lg bg-white px-3 py-2
        rounded-3xl">
          <button
          onClick={()=>setColor("red")}
          className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
          style={{backgroundColor:"red"}}
          >Red
          </button>
          <button onClick={()=>setColor("Blue")}
          className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
          style={{backgroundColor:"blue"}}
          >Blue
          </button>
          <button onClick={()=>setColor("green")}
          className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
          style={{backgroundColor:"green"}}
          >Green
          </button>
          <button onClick={()=>setColor("gray")}
          className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
          style={{backgroundColor:"gray"}}
          >Gray
          </button>
          <button onClick={()=>setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
          style={{backgroundColor:"yellow"}}
          >yellow
          </button>
          <button onClick={()=>setColor("white")}
          className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
          style={{backgroundColor:"white"}}
          >white
          </button>
        </div>
      </div>
    </div>
  )
}
export default App