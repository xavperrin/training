import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { AdminComponent } from './admin/admin.component';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SessionItemComponent,
    SessionItemListComponent,
    AdminComponent,
    SessionAddFormComponent,
    SessionEditFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule], 
  bootstrap: [AdminComponent]
})
export class AdminModule { }
