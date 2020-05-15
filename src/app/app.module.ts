import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { InscriptiondisabledDirective } from './inscriptiondisabled.directive';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'list',
    component: SessionItemListComponent},
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  { path: '',   redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    InscriptiondisabledDirective,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot( appRoutes, { enableTracing: true } ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]//app root, app lancée en 1er
})
export class AppModule { }
