import React, { Component } from "react"
import TodoStore from '../store/TodoStore'
class TodoEntry extends Component {
    state = {
        value: ''
    };
    handelKeyDown = event => {
        if (event.keyCode !== 13 || this.state.value === '') { return; }
        event.preventDefault()
        TodoStore.addTodo(this.state.value)
        this.filterView()
        this.setState({
            value: ''
        })
    }

    filterView = () => {
        let item = document.getElementsByClassName('selected')
        if (item[0].id === 'All') 
        TodoStore.filterView("All")
        else if (item[0].id === 'Active') 
        TodoStore.filterView("Active")
        else if (item[0].id === 'Completed') 
        TodoStore.filterView("Completed")
    }

    render() {
        return (
            <header className="header">
                <h1>Todos</h1>
                <input
                    value={this.state.value}
                    onChange={event => this.setState({ value: event.target.value })}
                    onKeyDown={
                        event => this.handelKeyDown(event)
                    }
                    type="text"
                    className="new-todo"
                    placeholder="What needs to be done?" />
            </header>
        );
    }
}
export default TodoEntry