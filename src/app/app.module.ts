import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';
import {CdkDragDropConnectedSortingGroupExample} from './cdk-drag-drop-connected-sorting-group-example';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { DialogOverviewExample, DialogOverviewExampleDialog } from './dialog-overview-example';

@NgModule({
  declarations: [CdkDragDropConnectedSortingGroupExample,DialogOverviewExample, DialogOverviewExampleDialog],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [CdkDragDropConnectedSortingGroupExample],
})
export class AppModule {}
