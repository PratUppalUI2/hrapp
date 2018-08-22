import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonsModule } from './commons/commons.module';
import { AppComponent } from './app.component';
import { PlantModule } from './plant/plant.module';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Contact', component: ContactComponent},
  { path: 'About/:aid', component: AboutComponent},
  { path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    PlantModule,
    CommonsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
