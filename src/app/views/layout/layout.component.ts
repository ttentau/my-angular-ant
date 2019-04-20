import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.less']
})
export class LayoutComponent {
    title = 'my-app';
    isCollapsed = false;
    isReverseArrow = false;
    width = 200;
    visible = false;

    constructor(private router: Router) {
    }

    open(): void {
        this.visible = true;
    }

    close(): void {
        console.log(666);
        this.visible = false;
    }

    logout() {
        console.log(666);
        this.router.navigate(['/login']);

    }
}
