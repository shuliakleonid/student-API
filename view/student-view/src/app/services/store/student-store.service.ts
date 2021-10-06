import { Injectable } from '@angular/core';
import { StudentService } from '../student.service';
import { map } from 'rxjs/operators';
import {Subject} from 'rxjs';
import {Student} from '../../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentStoreService {

  readonly student$ = new Subject<Student>();

  readonly students$ = new Subject<Student[]>();


  constructor(private readonly studentHttpService: StudentService) { }

  getAllStudents():void {
    this.studentHttpService
      .getStudentList()
      .subscribe({
          next: (student) => {
            console.log(student)
          this.students$.next(student)
      }
    })
  }

  createStudents(student: Student) {
    this.studentHttpService.createStudent(student).subscribe();
  }
}
