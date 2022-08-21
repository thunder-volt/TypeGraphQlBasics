import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Student from "./student";

@Entity("Todo")
@ObjectType("Todo")
class Todo extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    @Field()
    id: string

    @Column()
    @Field()
    task: string

    @ManyToOne(() => Student, student => student.todos)
    @Field(() => Student)
    student: Student

}
export default Todo;