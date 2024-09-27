import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { livreService } from '../services/livre.service';

@Component({
  selector: 'livre-emp-add-edit',
  templateUrl: './livre-add-edit.component.html',
  styleUrls: ['./livre-add-edit.component.scss'],
})
export class livreAddEditComponent implements OnInit {
  empForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _livservice: livreService,
    private _dialogRef: MatDialogRef<livreAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      title: '',
      author: '',
      pages: '',
      year: '',
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {

        this._livservice.addLivre(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('livre ajoutée avec succée');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  

