import * as actionTypes from '../action-types';
let todo = {
  addTask(task) {
    return { type: actionTypes.ADD, task }
  },
  ChangeTask(task) {
    return { type: actionTypes.CHANGE, task }
  },
  delTask(task) {
    return { type: actionTypes.DEL, task }
  },
  changeTaskState(changeState) {
    return { type: actionTypes.CHANGE_STATE, changeState }
  }
}
export default todo;