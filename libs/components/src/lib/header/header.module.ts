import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { BlogService } from '@nx-org/services';

@NgModule({
  imports: [MatCardModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  providers: [BlogService],
})
export class HeaderModule {}
