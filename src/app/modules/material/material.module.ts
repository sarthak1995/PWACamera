import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule],
})
export class MaterialModule { }
