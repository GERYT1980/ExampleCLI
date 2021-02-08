export {};

interface ITodo{
    name:string;
    description: string;
    completed: boolean;
}

class Todo implements ITodo{
    public name:string;
    public description: string;
    public completed: boolean;
    constructor(name:string, description:string, completed:boolean){
        this.name = name;
        this.description = description;
        this.completed = completed;
    }
}

class TodoList{
    public static allTodos: Todo[]= new Array;
    createTodoItem(name:string,description:string):number {
        let newItem = new Todo(name,description, false);
        let totalCount: number = TodoList.allTodos.push(newItem);
        return totalCount;
    }

    allTodoItems():Todo[]{
        return TodoList.allTodos;
    }
}

function toAlltask(task:string, description:string){

    let todo = new TodoList();
    // adds the task to list
    todo.createTodoItem(task, description);

    for(let index=0; index < TodoList.allTodos.length;index++){
       return TodoList.allTodos[index].name + ' ' + TodoList.allTodos[index].description;
    }
}


