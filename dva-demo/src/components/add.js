import React from 'react';

const Add = ({clickEvent}) => (
  <div>
    <input type="text" id="input"/>
    <button onClick={() => {
      clickEvent(document.getElementById('input').value)
      document.getElementById('input').value = ''
    }}>添 加</button>
  </div>
)

export default Add;
