import { Injectable, HostBinding } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { IsLoggedIn } from './isLoggedIn';

@Injectable()
export class AuthService {
    constructor(protected localStorage: LocalStorage) {}
    public isAuthenticated(): boolean {
        const LoggedIn = IsLoggedIn.Instance;
        if(LoggedIn.isLoggedIn)
        {
            return true;
        } else {
            return false;
        }
    }
}