import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { taskList } = this.props,
      count = (taskList.filter(item => item.state === 'unfinish')).length;

    return <div>
      <h2>任务列表【当前未完成的任务数：{count}】</h2>
      <input type='text' placeholder='请输入将要完成的任务' style={{ width: '500px', height: '40px', paddingLeft: '20px' }} onKeyUp={this.addTask} />
    </div>
  }

  componentWillReceiveProps(nextProps) {
    console.log('header组件属性更新了', '22')
  }

  addTask = (e) => {
    if (e.keyCode == 13) {
      let { addTask } = this.props,
        content = e.target.value;
      if (content) {
        addTask({ content, state: 'unfinish' });
        e.target.value = '';
      } else {
        alert('请先输入内容')
      }

    }
  }

}

export default connect((state) => ({ ...state.todo }), actions.todo)(Header);