import { Todo } from "./todo";

export type TodoCreationParams = Pick<Todo,"title" | "description">

export class TodoService {
    public get(todoId: string): Todo {
        // ideall here a mongoose call to get a todoID from the database.
        // but since we are dummying it here.
        return {
            id:todoId,
            title:"dummy todo",
            description: "dummy desc",
            done:false
        }
    }

    public create(todoCreationParams: TodoCreationParams): Todo {
        console.log("mock db call");
        // ideall you would want to do a database post here. 
        // post in the database that a new database has been created.
        return {
            id:"1",
            title:"dummy todo",
            description: "dummy desc",
            done:false
        }
    }

}