import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatButtonModule, MatCheckboxModule],
  exports: [RouterModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule]
})
export class AppRoutingModule { }

