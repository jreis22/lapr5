export class IsLoggedIn {

    private static _instance: IsLoggedIn;

    isLoggedIn: boolean = false;
    
    private constructor() {}

    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    }

    public toggle(): void {
        this.isLoggedIn = !this.isLoggedIn;
    }
    public toggleIf(): void {
        if(this.isLoggedIn == true) {
            this.toggle();
        }
    }
}