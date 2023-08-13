import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class LayoutService {
    private _isDefaultLayout: boolean = true;

    set isDefaultLayout(value: boolean) {
        this._isDefaultLayout = value;
    } 

    get isDefaultLayout(): boolean {
        return this._isDefaultLayout;
    }
}