import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nx-org-form-telespectador',
  templateUrl: './form-telespectador.component.html',
  styleUrls: ['./form-telespectador.component.scss'],
})
export class FormTelespectadorComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() { }

  login() {
    this.router.navigate(['/admin']);
  }
}
