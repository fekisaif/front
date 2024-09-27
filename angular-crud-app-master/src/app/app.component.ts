import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { livreAddEditComponent } from './livre-add-edit/livre-add-edit.component';
import { livreService } from './services/livre.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from './core/core.service';
import { Livre } from './model/livre.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'title',
    'action',
  ];
  dataSource!: MatTableDataSource<Livre>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _livService: livreService,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getLivreList();
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(livreAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getLivreList();
        }
      },
    });
  }

  getLivreList() {
    this._livService.getLivreList().subscribe({
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

 // deleteEmployee(id: number) {
   // this._livService.deleteEmployee(id).subscribe({
     // next: (res) => {
       // this._coreService.openSnackBar('Employee deleted!', 'done');
        //this.getEmployeeList();
      //},
      //error: console.log,
    //});
  //}

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(livreAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getLivreList();
        }
      },
    });
  }
}
