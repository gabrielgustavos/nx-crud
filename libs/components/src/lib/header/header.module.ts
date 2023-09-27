import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogService } from '@nx-org/services';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [MatCardModule, CommonModule, RouterModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  providers: [BlogService],
})
export class HeaderModule {}
