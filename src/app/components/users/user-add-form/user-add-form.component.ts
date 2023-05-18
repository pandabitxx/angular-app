// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-user-add-form',
//   templateUrl: './user-add-form.component.html',
//   styleUrls: ['./user-add-form.component.css']
// })
// export class UserAddFormComponent {

// }

import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentsService } from '../../../services/students.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../../../core/core.service';

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.css']
})
export class UserAddFormComponent implements OnInit {
  stdForm: FormGroup;

  education: string[] = [
    'Bachiller', 
    'Técnico',
    'Técnologo',
    'Profesional',
    'Especializado',
  ]

  constructor(
    private _fb: FormBuilder, 
    private _stdService: StudentsService,
    private _dialogRef: MatDialogRef<UserAddFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.stdForm = this._fb.group({
      firstName:'',
      lastName:'',
      email:'',
      date:'',
      gender:'',
      education:'',
      company:'',
      experience:'',
      salary:'',
    });
  }

  ngOnInit(): void {
    this.stdForm.patchValue(this.data)
  }

  onFormSubmit() {
    if(this.stdForm.valid){
      if(this.data) {
        this._stdService
        .updateEmployee(this.data.id, this.stdForm.value)
        .subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Estudiante Actualizado!', 'done');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err)
          }
        });
      } else {
        this._stdService.addstudent(this.stdForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Estudiante agregado con éxito!', 'done');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err)
          }
        });
      }
    }
  }
}
