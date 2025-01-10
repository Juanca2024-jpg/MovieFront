import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '@shared/components/alert-dialog/alert-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) {}

  openSnackBar(mensaje:string) {
    this._snackBar.open(mensaje, 'Cerrar', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
  
  showError(message: string) {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: { message },
      disableClose: true
    });
  
    setTimeout(() => {
      dialogRef.close();
    }, 2000);
  }
}
