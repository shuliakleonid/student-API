import Student from './student.js';

class StudentService {
  async create(student) {
      const createdStudent = await Student.create(student)
      return createdStudent;
  }

  async getOne(id) {
      if(!id){
        throw new Error('Id not indicated');
      }
      const student = await Student.findById(id);
      return student;
    }
  async getAll( ) {
      const student = await Student.find();
      return student;
  }

  async update( student ) {
      if(!student._id) {
        throw new Error('Id not indicated')
      }
      const updatedStudent = await Student.findByIdAndUpdate(student._id, student, {new: true})
      return updatedStudent;
   }

  async delete( id ) {
      if(!id){
        throw new Error('Id not indicated')
      }
      const student = await Student.findByIdAndDelete(id);
      return student;
    }
}

export default new StudentService();
