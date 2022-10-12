class Todo { 
    constructor(id, description) {
        this.id = id
        this.description = description
    }

    getTodo() {
        return `${this.id}: ${this.description}`
    }

    setDescription(newDescription) {
        this.description = newDescription
    }
}