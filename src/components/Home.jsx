import React from 'react'
import '../style/Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>

    <h1 style={{fontWeight:400}}>Welcome to Foods kitchen</h1>
    <Link to={"/menu"}><button>go to menu</button></Link>

    </div>
  )
}

export default Home