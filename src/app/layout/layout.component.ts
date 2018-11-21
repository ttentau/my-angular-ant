import {Component, OnInit} from '@angular/core';
import {navigation} from './../_nav';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    navigation = navigation;

    isCollapsed = false;
    isReverseArrow = false;
    width = 200;
    constructor() {
    }

    ngOnInit() {
    }

}
