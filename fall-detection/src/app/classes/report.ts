import { Date } from "./date";

export class Report{
    name: string;
    date: Date;
    long: number;
    lat: number;
    status: string;
    clientID: number;

    constructor(name, date, long, lat, status, clientID){
        this.name = name;
        this.date = date;
        this.long = long;
        this.lat = lat;
        this.status = status;
        this.clientID = clientID;
    }
}