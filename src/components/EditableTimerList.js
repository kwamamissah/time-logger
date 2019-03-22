import React, { Component } from 'react';

class EditableTimerList extends Component {
  render() {
    return(
      <div id='timers'>
        <EditableTimer
          title='Get Job'
          project='April 2019'
          elapsed='2592000'
          runningSince={null}
          editFormOpen={false}
          />

          <EditableTimer
            title='Flatiron School'
            project='Hashlanta'
            elapsed='10368000'
            runningSince={null}
            editFormOpen={true}
            />
          </div>
    )
  }
}

export default EditableTimerList
