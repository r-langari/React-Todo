import {observable} from 'mobx'
export default class TodoModel {
    store
    id
    @observable title
    @observable completed
    
    
    constructor (store,title,completed,id){
        this.store = store
        this.title = title
        this.completed = completed
        this.id = id 
    }

   
    
}
