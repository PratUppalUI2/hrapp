import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonsModule } from './commons/commons.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ManageComponent } from './manage/manage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'Manage', component: ManageComponent},
  { path: '', component: DashboardComponent},
  { path: '', component: DashboardComponent},
  { path: '', component: DashboardComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ManageComponent,
    DashboardComponent,
    TopnavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    CommonsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
