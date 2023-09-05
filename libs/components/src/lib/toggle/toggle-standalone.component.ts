import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'doggi-web-toggle-standalone',
    templateUrl: 'toggle-standalone.component.html',
    styleUrls: ['./toggle.component.scss']
})

export class ToggleStandaloneComponent implements OnInit {

    @Input() disabled: boolean = false;
    @Input() toggleId!: string;
    @Input() toggleChecked: boolean = false;
    @Input() value: any = '';

    constructor() { }

    ngOnInit() { }
}