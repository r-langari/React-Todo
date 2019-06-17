import React, { Component } from "react"
import { observer } from 'mobx-react'
import TodoStore from '../store/TodoStore'

@observer
class TodoItem extends Component {
  render() {

    const item = this.props.item;
    return (
      <li className={item.completed ? 'completed' : ''}>
        <div className="view">
          <input type="checkbox" className="toggle" value="on" checked={item.completed} onChange={() => this.onToggle()} />
          <label> {item.title} </label>
          <button onClick={() =>
            this.deleteItem()
          } className="destroy" />
        </div>
      </li>
    )
  }

  onToggle = () => {
    TodoStore.toggle(this.props.item);
  }

  deleteItem = () => {
    TodoStore.deleteTodo(this.props.item)
  }
}
export default TodoItem