import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserAddFormComponent } from '../user-add-form/user-add-form.component';
import { StudentsService } from '../../../services/students.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '../../../core/core.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = [
    'id', 
    'firstName', 
    'lastName', 
    'email',
    'date',
    'gender',
    'education',
    'company',
    'experience',
    'salary',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private  _stdService: StudentsService,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getStudentlist();
  }

  openAddEditForm() {
    const dialogRef = this._dialog.open(UserAddFormComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getStudentlist();
        }
      },
    });
  }

  getStudentlist() {
    this._stdService.getStudentlist().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteStudents(id: number) {
    this._stdService.deleteStudents(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Estudiante Eliminado!', 'done');
        this.getStudentlist();
      },
      error: console.log,
    })
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(UserAddFormComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getStudentlist();
        }
      },
    });
  }
}
