import React, { Component } from "react"
import { observer } from 'mobx-react'
import TodoStore from '../store/TodoStore'

@observer
class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                {/* <!-- This should be `0 items left` by default --> */}
                <span className="todo-count"><strong>{TodoStore.InCompletedCounter}</strong> items has remained</span>
                {/* <!-- Remove this if you don't implement routing --> */}
                <ul className="filters">
                    <li >
                        <a id="All" onClick={() => this.filterView("All")} className="selected" href="#/">All</a>
                    </li>
                    <li  >
                        <a id="Active" onClick={() => this.filterView("Active")} href="#/active">Active</a>
                    </li>
                    <li  >
                        <a id="Completed" onClick={() => this.filterView("Completed")} href="#/completed">Completed</a>
                    </li>
                </ul>
                {/* <!-- Hidden if no completed items are left ↓ --> */}
                <button onClick={() => this.deleteCompleted()} className="clear-completed">Clear completed</button>
            </footer>
        )
    }

    filterView = (filter) => {
        if (filter === "All") {
            TodoStore.filterView("All")
            this.focuseHandeler('All')
        } else if (filter === "Active") {
            TodoStore.filterView("Active")
            this.focuseHandeler('Active')
        } else {
            TodoStore.filterView("Completed")
            this.focuseHandeler('Completed')
        }
    }

    focuseHandeler = (id) => {
        let item = document.getElementById(id)
        if (id === 'Active'){
            item.classList.add('selected')
            item = document.getElementById('All')
            item.classList.remove('selected')
            item = document.getElementById('Completed')
            item.classList.remove('selected')
        }else if (id === 'All'){
            item.classList.add('selected')
            item = document.getElementById('Active')
            item.classList.remove('selected')
            item = document.getElementById('Completed')
            item.classList.remove('selected')
        }else if (id === 'Completed'){
            item.classList.add('selected')
            item = document.getElementById('All')
            item.classList.remove('selected')
            item = document.getElementById('Active')
            item.classList.remove('selected')
        }
    }
    deleteCompleted = () => {
        for (let i = 0; i < TodoStore.allTodoItems.length; i++) {
            if (TodoStore.allTodoItems[i].completed) {
                TodoStore.deleteTodo(TodoStore.allTodoItems[i])
                i--
            }
        }
    }
}
export default Footer