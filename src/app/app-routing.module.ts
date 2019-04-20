import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './views/login/login.component';
import {LayoutComponent} from './views/layout/layout.component';
import {ArticleComponent} from './views/article/article.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Login Page'
        }
    },
    {
        path: '',
        component: LayoutComponent,
        data: {
            title: 'layout'
        },
        children: [
            {
                path: 'article',
                component: ArticleComponent,
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
