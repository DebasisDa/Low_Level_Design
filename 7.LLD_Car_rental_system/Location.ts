export class Location {
    address: String;
    pincode: number;
    city: String;
    state: String;
    country: String;

    constructor(pincode: number, city: String, state: String, country: String) {
        this.pincode = pincode;
        this.city = city;
        this.state = state;
        this.country = country;
    }
}
