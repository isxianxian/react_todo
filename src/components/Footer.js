import React from 'react';
import action from '../store/actions'
import { connect } from 'react-redux';

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { showState } = this.props;
    return <div>
      <div
        className={['btn', showState == "all" ? "btn-danger" : "btn-default"].join(' ')}
        onClick={() => { this.changeTaskState('all') }}>全部</div> &nbsp;
      <div
        className={`btn ${showState == "finish" ? "btn-danger" : "btn-default"}`}
        onClick={() => { this.changeTaskState('finish') }}>已完成</div>&nbsp;
      <div
        className={['btn', showState == "unfinish" ? "btn-danger" : "btn-default"].join(' ')}
        onClick={() => { this.changeTaskState('unfinish') }}>未完成</div>&nbsp;
    </div>
  }

  changeTaskState = (state) => {
    let { changeTaskState } = this.props;
    changeTaskState(state);
  }
}

export default connect((state) => ({ ...state.todo }), action.todo)(Footer);
