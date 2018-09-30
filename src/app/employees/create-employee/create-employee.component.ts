import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {Department} from '../../models/department.model'



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  gender = 'male';
  isActive = true;
  // department = '3';
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];
  

  constructor() { }

  ngOnInit() {
  }

  // Make sure to import NgForm type from '@angular/forms'
  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm.value);
  }
}
