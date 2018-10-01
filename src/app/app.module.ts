


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import the RouterModule into the application root module AppModule. The Router Module contains the Router service and Router directives such as (RouterLink, RouterLinkActive, RouterOutlet etc)

// To configure routes, we first need to import Routes type from '@angular/router'. If you look at the definition of Routes type, it is actually an array of Route objects. This Routes type is not required for the application to work. However, using it provides us intellisense and compile time checking
import { RouterModule, Routes } from '@angular/router';

// import { NgForm } from '@angular/forms';
// The ngForm directive is provided by Angular FormsModule.So for us to be able to use it, we will have to import the FormsModule in our AppModule file(app.module.ts).So please make sure to include the following import statement.Also include "FormsModule" in the imports array of @NgModule decorator.If "FormsModule" is not imported you will see the following error in the browser developer toolsthere is no directive with exportas set to ngform
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';

// Each route maps a URL path to a component
// The 3rd route specifies the route to redirect to if the path
// is empty. In our case we are redirecting to /list

// pathMatch property value can be full or prefix. For now we
// will set it to full as we want to do a full match.
const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

// To let the router know about the routes configured above,
// pass "appRoutes" constant to forRoot(appRoutes) method
// We also have forChild() method. We will discuss the difference
// and when to use one over the other

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent
  ],
  // Include RouterModule in the "imports" array of the @NgModule() decorator
  //Include FormsModule
  imports: [
    BrowserModule,
    // RouterModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

