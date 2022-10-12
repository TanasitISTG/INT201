const todo = require('./todo.js');

let todos = []

let addTodo = (desc) => {
    todos.push(desc)
    return todos.length
}

let removeTodo = (removeId) => {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === removeId) {
            todos.splice(i, 1)
            return `Todo with id ${removeId} removed, ${todos.length} todos left`
        }
    }
    return `Todo with id ${removeId} not found`
}

let findTodo = (searchId) => {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === searchId) {
            return todos[i]
        }
    }
    return `Todo with id ${searchId} not found`
}

let getTodos = () => {
    return todos
}

console.log(addTodo({id : 1, description : 'go to sleep'}))
console.log(addTodo({id : 2, description : 'get a new keyboard'}))
console.log(addTodo({id : 3, description : 'buy a world'}))
console.log('---------------------')
console.log(removeTodo(2))
console.log('---------------------')
console.log(findTodo(3))
console.log('---------------------')
console.log(getTodos())