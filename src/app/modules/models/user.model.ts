export class User {

    public _id: string;
    public createdAt:string;
    public updatedAt:string;
    
    public type: string;

    public fName: string;
    public lName: string;
    public eMail: string;
    public eMailConfirmed: string;

    public password: string;
    public passwordRe: string;

    public proccess: string;         //  registration or  allready registered




    constructor() {

        this._id = '';
        this.type = '';

        this.fName = '';
        this.lName = '';
        this.eMail = '';
        this.eMailConfirmed = '';

        this.password = '';
        this.passwordRe = '';

        this.proccess = '';


    }
}