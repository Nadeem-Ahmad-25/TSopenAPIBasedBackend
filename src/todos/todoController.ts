import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";
  import { Todo } from "./todo";
  import { TodoService, TodoCreationParams } from "./service";

@Route("todo")
  export class TodoController extends Controller{
    @Get("{todoid}")
    
    public async getTodo (
        @Path() todoId: string,
    ): Promise<Todo>{
        // let todoService = new TodoService();
        return new TodoService().get(todoId);
    }
  }