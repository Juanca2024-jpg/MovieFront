import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';

@NgModule({
 imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule
 ],
 providers: [ provideHttpClient () ],
 declarations: [ AlertDialogComponent ],
 exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AlertDialogComponent
 ],
})
export class SharedModule {}