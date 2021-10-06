import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {StudentStoreService} from '../../services/store/student-store.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private readonly studentService: StudentStoreService) { }
  studentForm = new FormGroup({
    name: new FormControl(''),
    school: new FormControl(''),
  });
  ngOnInit(): void {
  }

  onSubmit() {
    this.studentService.createStudents(this.studentForm.value)
  }
}
