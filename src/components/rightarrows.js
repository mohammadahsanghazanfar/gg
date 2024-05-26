import React from 'react'
import './rightarrow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGreaterThan} from '@fortawesome/free-solid-svg-icons'

export default function Rightarrows(props) {

  return (
    <div className='rightarrow'>
      <button onClick={props.clicked}><FontAwesomeIcon icon={faGreaterThan} className='on-white2'></FontAwesomeIcon></button>
    </div>
  )
}
