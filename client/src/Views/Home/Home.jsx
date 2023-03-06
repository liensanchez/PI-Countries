import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {

  const navigate = useNavigate()

  function goIndex () {

    navigate('/index')
  }

  return (
    <>
    <div>img container</div>
    
    <button
      onClick={() => goIndex()}
    > Index
    </button>

    </>
  )
}

export default Home 