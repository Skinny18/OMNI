import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuthValue } from "../../context/AuthContext"
import './Principal.css'

export const Principal = () => {

  return (
    <div className='princ'>
          <div className='div01'>   
                  <button className='button01'>
            <NavLink to="/login" >                    
                    Login
                </NavLink>
            </button>
          </div> 

          <div className='div01'>
            <button className='button01'>
            <NavLink to="/register" >                    

                    Register
                </NavLink>
            </button>
          </div>  
        
        
    </div>
    
  )
}
