import {Component, OnInit} from '@angular/core';
import {navigation} from './../_nav';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

    navigation = navigation;

    isCollapsed = false;
    isReverseArrow = false;
    width = 240;
    constructor() {
    }

    ngOnInit() {
    }

}
