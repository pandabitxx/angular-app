import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(messege: string, action: string = 'ok') {
    this._snackBar.open(messege, action,  {
      duration: 1000,
      verticalPosition: 'top',
    });
  }
}
