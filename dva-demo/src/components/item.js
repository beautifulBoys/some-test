import React from 'react';

const item = ({act, text, id, deleteEvent, toggleEvent}) => {
  console.log(act, text, id)
  return (
    <li>
      <div style={{color: act ? 'green' : 'red'}} onClick={() => {
        toggleEvent({id: id})
      }}>{text}-----<span onClick={() => {
        deleteEvent({id: id})
      }}>X</span></div>
    </li>
  )
}


export default item
