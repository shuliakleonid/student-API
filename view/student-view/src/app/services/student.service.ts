import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from '../interfaces/student';
import {API} from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private readonly http: HttpClient) { }
  getStudentList() {
    return this.http.get<Student[]>(API.student);
  }
  createStudent(student: Student) {
    return this.http.post(API.student, student);
  }
}
