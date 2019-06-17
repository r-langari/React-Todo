import React, { Component } from "react"
import TodoItem from './TodoItem'
import TodoStore from '../store/TodoStore'
import Footer from './Footer'
import { observer } from 'mobx-react'

@observer
class TodoItems extends Component {
    render() {
        return (
            <div>
                <section className="main">
                    <ul className="todo-list">
                        {
                            TodoStore.todos.map( todo => {
                                    return (   
                                        <TodoItem item = {todo} />
                                    )
                            })
                        }
                    </ul>
                </section>
                <Footer />
            </div>
        )
    }

}
export default TodoItems