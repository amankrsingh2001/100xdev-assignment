/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.list = []
  }

  add(todos){
    this.list.push(todos)
    return this.list
  }

  remove(index){
      if(index > this.list.length){
         return 
      }
    this.list.splice(index,1)
    return this.list
    
  }
  update(index,updatedTodo){
    if(index>=this.list.length){
      return 
    }
    this.list[index] = updatedTodo
    return this.list
  } 


  getAll(){
    return this.list;
  }

  get(indexOfTodo){
    if(this.list.length <= indexOfTodo) {
     return null
    }
    return this.list[indexOfTodo]
  }
  clear(){
   this.list.length = 0;
   return this.list;
  }

}

module.exports = Todo;
