import { Component, OnInit } from '@angular/core';
import {StudentStoreService} from '../../services/store/student-store.service';
import {Student} from '../../interfaces/student';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  constructor(private readonly studentService: StudentStoreService) { }

  readonly students$:Observable<Student[]|null> = this.studentService.students$

  ngOnInit(): void {
    this.studentService.getAllStudents();
  }

}
