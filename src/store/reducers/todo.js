import * as actionTypes from '../action-types';

let defaultState = {
  showState: 'all',
  taskList: [
    { content: "还好", state: "unfinish" },
    { content: "睡觉", state: "finish" }
  ]
};
let todo = function (state = defaultState, action) {
  let { type } = action;
  if (type == actionTypes.ADD) {
    let { taskList } = state;
    let { task } = action;
    taskList = [...taskList, task];
    state.taskList = taskList;
    state = { ...state };
    // taskList 的堆内存没变，即使state变了，页面刷新，由于没检查到不同所以也不会重新render
  } else if (type == actionTypes.CHANGE) {
    let { taskList } = state;
    let { task } = action;
    let index = taskList.findIndex((item) => item === task),
      item = taskList[index];
    item.state === 'unfinish' ? item.state = 'finish' : item.state = 'unfinish';
    taskList[index] = item;
    taskList = [...taskList];
    state = { ...state, taskList };
  } else if (type == actionTypes.DEL) {
    let { taskList } = state;
    let { task } = action;
    let index = taskList.findIndex((item) => item === task);
    taskList.splice(index, 1);
    taskList = [...taskList];
    state = { ...state, taskList }
  } else if (type == actionTypes.CHANGE_STATE) {
    state.showState = action.changeState;
    state = { ...state }
  }


  return state;
}

export default todo;