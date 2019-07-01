import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
    selector: 'app-test-component',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
    public response: any;

    constructor(private authService: AuthService,
                private router: Router) {}

    async ngOnInit() {
        this.response = await this.authService.testAuth().toPromise();
    }

    async logout() {
        this.authService.removeToken();
        this.router.navigate(['login']);
    }
}
