import { Field, InputType } from "type-graphql"


@InputType("StudentInput")
class StudentInput {
    @Field()
    name: string;
}
@InputType("TodoInput")
class TodoInput {
    @Field()
    task: string;

    @Field()
    studentId: string;
}
export { StudentInput, TodoInput };