let todos = []

class Todo { 
    constructor(id, description) {
        this.id = id
        this.description = description
    }

    getTodo() {
        return {id : this.id, description : this.description}
    }

    setDescription(newDescription) {
        this.description = newDescription
        return this.description
    }
}

let addTodo = (desc) => {
    todos.push(desc)
    return todos.length
}

let removeTodo = (removeId) => {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === removeId) {
            todos.splice(i, 1)
            // for (let j = i; j < todos.length; j++) {
            //     todos[j].id--
            // }
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

const test = () => {
    console.log('Adding todos...')
    console.log('---------------------')
    console.log(addTodo(new Todo(1, 'go to sleep')))
    console.log(addTodo(new Todo(2, 'get a new keyboard')))
    console.log(addTodo(new Todo(3, 'buy a world')))
    console.log('---------------------')
    console.log(removeTodo(2))
    console.log('---------------------')
    console.log(findTodo(3))
    console.log('---------------------')
    console.log(getTodos())
    console.log('\n=====================')
    console.log('=====================\n')
    console.log('Test function from class Todo')
    console.log('---------------------')
    console.log(findTodo(1).setDescription('go to sleep and dream'))
    console.log(findTodo(1).getTodo())
}

test()
