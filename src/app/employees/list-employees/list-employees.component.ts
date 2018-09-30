import { Component, OnInit } from '@angular/core';
// import Employee Model
import { Employee } from '../../models/employee.model';

// // Jquery reference
// // import * as $ from 'jquery';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      // photoPath: '../../../../emp/assets/images/mark.png'
      // photoPath: '../../../../assets/images/mark.png'
      photoPath: 'assets/images/mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: 'HR',
      isActive: true,
      // photoPath: '../ASPNETAng6/a6/a6spa1/src/assets/images/mary.png'
      photoPath: 'assets/images/mary.png'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: 'IT',
      isActive: false,
      // photoPath: '../../a6/a6spa1/src/assets/images/john.png'
      photoPath: 'assets/images/john.png'
    },
  ];
  constructor() { }

  ngOnInit() {
    // $(document).ready(function () {
    //   $("button").click(function () {
    //       var div = $("#JQAnim");
    //       div.animate({ left: '100px' }, "slow");
    //       div.animate({ fontSize: '5em' }, "slow");
    //   });
    // });
  }

}
