import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import GoBackBtn from './GoBackBtn'
import { useLocation } from 'react-router-dom'


function Layout() {
  const location = useLocation()
  const [background, setBackground] = useState(false)

  useEffect(()=> {
    if(location.pathname != '/modulos-propuesto'){
      setBackground(false)
    }else{  
      setBackground(true)
    }

  },[location.pathname])

  useEffect(()=>{
    if(!background)
    {
      document.body.style = ' background: linear-gradient(90deg, rgb(0, 99, 110) 0%, rgb(0, 69, 87) 47%, rgba(0,28,111,1) 100%);'
      
    }else{
      document.body.style = 'background: #dfdddd7e;'
   
      
    }
  },[background])
  

  console.log(background)

  return (
    <>
    
      {location.pathname != '/' && (
        <GoBackBtn/>
      )
      }
    <Header/>
    <Outlet/>
    
    </>
  )
}

export default Layout