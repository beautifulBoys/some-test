import React from 'react';
import { connect } from 'dva';

const List = ({list, deleteEvent, toggleEvent}) => {
  return (
    <div>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li key={index}>
                <div style={{color: item.act ? 'green' : 'red'}} onClick={() => {
                  toggleEvent(item)
                }}>{item.text}-----<span onClick={() => {
                  deleteEvent(item)
                }}>X</span></div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default connect()(List)
