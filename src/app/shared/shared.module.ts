import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoService } from './services/demo.service';

// Shared Module:
// ReExport von ständig importieren Modulen
// Deklaration von mehrfach verwendeten Components, Directives, Pipes
// Services, die unmittelbar mit diesen Deklaration verbunden sind
// Bei letzterem, das forRoot-Pattern beachten

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule, providers: [DemoService]};
  }
}
