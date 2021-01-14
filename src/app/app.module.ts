import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TasksComponent} from './views/tasks/tasks.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from '@angular/material/core';
import {CategoriesComponent} from './views/categories/categories.component';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {EditTaskDialogComponent} from './dialog/edit-task-dialog/edit-task-dialog.component';
import {ConfirmDialogComponent} from './dialog/confirm-dialog/confirm-dialog.component';
import {AppComponent} from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [
        AppComponent,
        CategoriesComponent,
        TasksComponent,
        EditTaskDialogComponent,
        ConfirmDialogComponent
    ],
    imports: [
        BrowserModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatOptionModule,
        MatSelectModule
    ],
    providers: [],
    entryComponents: [
        EditTaskDialogComponent,
        ConfirmDialogComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
