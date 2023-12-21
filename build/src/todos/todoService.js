"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get(todoId) {
        // ideall here a mongoose call to get a todoID from the database.
        // but since we are dummying it here.
        return {
            id: todoId,
            title: "dummy todo",
            description: "dummy desc",
            done: false
        };
    }
    create(todoCreationParams) {
        console.log("mock db call");
        // ideall you would want to do a database post here. 
        // post in the database that a new database has been created.
        return {
            id: "1",
            title: "dummy todo",
            description: "dummy desc",
            done: false
        };
    }
}
exports.TodoService = TodoService;
