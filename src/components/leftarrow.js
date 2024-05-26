
import React,{ useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLessThan } from '@fortawesome/free-solid-svg-icons'
import './leftarrow.css'


export default function Leftarrow(props) {

  return (
    <div className='leftarrow'>
      
       <button onClick={props.click}> <FontAwesomeIcon icon={faLessThan} className='on-white' ></FontAwesomeIcon> </button>
    </div>
  )
}
