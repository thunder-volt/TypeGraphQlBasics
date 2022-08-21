import Student from "../entities/student";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { StudentInput } from "../types/inputs";

@Resolver()
class StudentResolver {
    @Mutation(() => Student)
    async createStudent(@Arg("NewStudentData") newStudentInput: StudentInput) {
        try {
            const student = new Student;
            student.name = newStudentInput.name;
            const studentCreated = await student.save();
            return studentCreated;
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    @Query(() => String)
    async info() {
        return "Enter Name";
    }

}

export default StudentResolver;