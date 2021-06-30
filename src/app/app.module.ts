import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewsModule } from './views/views.module';
import { ServicesModule } from './services/services.module';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShoppingCart, faSearch, faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { PipesModule } from './pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    PipesModule,
    ServicesModule,
    ViewsModule,
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  /**
   *
   */
  constructor(private library: FaIconLibrary) {
    library.addIcons(faShoppingCart, faSearch, faTimes, faPlus, faMinus);
  }
}
