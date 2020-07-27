import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';

class Body extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { taskList, showState } = this.props;
    if (showState != 'all') {
      taskList = taskList.filter(item => item.state === showState);
    }

    return <div className='my-2'>
      <div className="list-group">
        {
          taskList.map((item, index) => (
            <div className="list-group-item input-group" key={index}>
              <input type="checkbox" checked={item.state == 'finish'} className='mx-2' onClick={() => { this.changeState(item) }} />
              <span className={item.state === 'unfinish' ? 'unfinish' : 'finish'}>{item.content}</span>
              <i className='glyphicon glyphicon-remove text-danger fr' onClick={() => { this.delEvent(item) }}>删除</i>
            </div>
          ))
        }
      </div>
    </div >
  }

  changeState = (item) => {
    let { ChangeTask } = this.props;
    ChangeTask(item);
  }
  delEvent = (item) => {
    let { delTask } = this.props;
    delTask(item)
  }
}

export default connect((state) => ({ ...state.todo }), actions.todo)(Body);