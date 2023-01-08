import React from 'react'
import ".././style.scss"
import Chat from '../chatComponents/Chat'
import Sidebar from '../chatComponents/Sidebar'

function Home() {
  return (
    <div className="home">
        <div className="container">
            <Sidebar/>
            <Chat/>
        </div>
    </div>
  )
}

export default Home