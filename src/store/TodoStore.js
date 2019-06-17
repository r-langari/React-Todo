import { observable, action } from 'mobx'
import TodoModel from './TodoModel'
class TodoStore {

    //------- fields
    allTodoItems = []
    @observable todos = []
    @observable CompletedCounter = 0
    @observable InCompletedCounter = 0
    lastId = 0

    //---------functions
    @action
    addTodo(title) {
        this.allTodoItems.push(new TodoModel(this, title, false, this.lastId++))
        this.todos = this.allTodoItems
        this.todoCompletedCount()
        this.todoInCompletedCount()
    }

    @action
    deleteTodo(item) {
        let index = this.allTodoItems.indexOf(item)
        this.allTodoItems.splice(index, 1)
        this.todoCompletedCount()
        this.todoInCompletedCount()
        this.todos = this.allTodoItems
    }


    @action
    toggle(item) {
        let index = this.allTodoItems.indexOf(item)
        this.allTodoItems[index].completed = !this.allTodoItems[index].completed
        this.todoCompletedCount()
        this.todoInCompletedCount()
        this.todos = this.allTodoItems
    }
    //--------- counting the completed items
    @action
    todoCompletedCount() {
        let temp = 0;
        if (this.allTodoItems.length === 0) return 0;
        else {
            for (let i = 0; i < this.allTodoItems.length; i++) {
                if (this.allTodoItems[i].completed) temp++
            }
        }
        this.CompletedCounter = temp
    }
    //--------- counting the inCompleted items
    @action
    todoInCompletedCount() {
        let temp = 0;
        if (this.allTodoItems.length === 0) return 0;
        else {
            for (let i = 0; i < this.allTodoItems.length; i++) {
                if (!this.allTodoItems[i].completed) temp++
            }
        }
        this.InCompletedCounter = temp
    }

    @action
    filterView(mode) {
        
        if (mode === "Active") {
            this.todos = this.allTodoItems.filter(function (todo) {
                return todo.completed === false
            })
        }else if (mode === "Completed"){
            this.todos = this.allTodoItems.filter(function (todo) {
                return todo.completed === true
            })
        }else  return this.todos = this.allTodoItems
        
    }
}
const store = new TodoStore()
export default store
