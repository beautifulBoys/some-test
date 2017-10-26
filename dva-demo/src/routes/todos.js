import React from 'react';
import { connect } from 'dva';
import Add from '../components/add.js';
import List from '../components/list.js';

function Todos({dispatch, list, add}) {
  function clickEvent (v) {
    dispatch({
      type: 'listModel/add',
      value: v
    });
  }
  function deleteEvent (item) {
    dispatch({
      type: 'listModel/delete',
      value: item.id
    });
  }
  function toggleEvent (item) {
    dispatch({
      type: 'listModel/toggle',
      value: item.id
    });
  }
  return (
    <div>
      <Add clickEvent={clickEvent}/>
      <List list={[...list]} deleteEvent={deleteEvent} toggleEvent={toggleEvent}/>
    </div>
  );
}


export default connect(
  ({listModel}) => ({list: listModel.list})
)(Todos);
