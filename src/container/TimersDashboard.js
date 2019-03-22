import React, { Component } from 'react';

import EditableTimerList from '../components/EditableTimerList'

class TimersDashboard extends Component {
  render(){
    return(
      <div className='column'>
      <EditableTimerList />
      <ToggleableTimerForm isOpen={true} />
      </div>
    )
  }
}

export default TimersDashboard
