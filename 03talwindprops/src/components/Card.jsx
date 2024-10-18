import React from 'react'

function Card({username}){
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
        <img src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;fit=crop&amp;w=800&amp;q=60"alt='AirMax Pro' className=" z-0 h-full w-full rounded-md object-cover"></img>
        
    </div>
  )
}

export default Card