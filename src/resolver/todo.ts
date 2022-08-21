import Todo from "../entities/todo";
import { TodoInput } from "../types/inputs";
import { Arg, Mutation, Resolver } from "type-graphql";
import Student from "../entities/student";

@Resolver()
class TodoResolver {
    @Mutation(() => Todo)
    async addTodo(@Arg("TodoData") todoInput: TodoInput) {
        try {
            const todo = new Todo
            todo.task = todoInput.task
            const student = await Student.findOne({ where: { id: todoInput.studentId } });
            todo.student = student!;
            const todoCreated = todo.save();
            return todoCreated;
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
}

export default TodoResolver