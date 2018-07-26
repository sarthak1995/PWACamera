import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  imports: [MatToolbarModule, MatSidenavModule],
  exports: [MatToolbarModule, MatSidenavModule],
})
export class MaterialModule { }
