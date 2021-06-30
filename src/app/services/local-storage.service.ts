import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {
    constructor() { }

    public get(key: string): string {
        return <string>localStorage.getItem(key);
    }

    public getJson(key: string): any {
        return JSON.parse(this.get(key));
    }

    public set(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    public setJson(key: string, value: any) {
        this.set(key, JSON.stringify(value));
    }

    public remove(key: string) {
        localStorage.removeItem(key);
    }

    public removeKeyStorage(keyMatch: string) {
        const n = Object.keys(localStorage).filter(s => s.split('/')[0] === keyMatch);
        if (n.length > 0) {
            localStorage.removeItem(n[0]);
            this.removeKeyStorage(keyMatch);
        } else {
            return;
        }
    }
}
