import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class SimulatorResponseGuard implements CanActivate {

    constructor(private router: Router) {
    }

    // empêche d'acceder à la page de résultat si le champ 'response' n'est pas défini dans l'objet state
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const extraState = this.router.getCurrentNavigation().extras.state;
        const canActivate: boolean = extraState && extraState.hasOwnProperty('response');
        if (!canActivate) {
            this.router.navigateByUrl('/page-not-found');
        }
        return canActivate;
    }
}
