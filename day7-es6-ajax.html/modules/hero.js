import { Person } from "./person.js";

export class Hero extends Person{
    firstname = "default";
    lastname = "default";
    age = 20;
    _mission = "My Secret Mission";
    constructor(fname, lname, cty){
        super(cty);
        this.firstname = fname;
        this.lastname = lname;
    }
    fullname(){
        return this.firstname+" "+this.lastname;
    }
    get mission(){
        return this._mission
    }
    set mission(nmission){
        this._mission = nmission;
    }
    static sayversion(){
        return 1001;
    }
};