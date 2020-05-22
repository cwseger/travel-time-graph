import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatProgressBarModule,
  MatIconModule,
  MatSidenavModule
} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from '../app/services/data.service';
import { DataUtils } from '../app/utils/data.utils';
import { LocationsFormComponent } from './components/locations-form/locations-form.component';
import { ChartComponent } from './components/chart/chart.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { SettingsService } from './services/settings.service';

@NgModule({
  declarations: [AppComponent, LocationsFormComponent, ChartComponent, DrawerComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatIconModule,
    MatSidenavModule,
    MatRadioModule
  ],
  providers: [DataService, DataUtils, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
