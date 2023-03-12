import { Bill } from "./Bill/Bill";
import { Payment } from "./Bill/Payment";
import { Location } from "./Location";
import { Car } from "./product/Car";
import { Vehicle } from "./product/vehicle";
import { VehicleType } from "./product/vehicleType";
import { Reservation } from "./Reservation/Reservation";
import { Store } from "./Store";
import { User } from "./User";
import { VehicleRentalSystem } from "./VehicleRentalSystem";

//Add new user
function addUsers(): User[] {
    let users: User[] = [];
    let user1 = new User();
    user1.setUserId(1);
    user1.setUserName("Debasis Das");
    user1.setDrivingLicense(12345);
    users.push(user1);
    return users;
}

//Add new vehicle
function addVehicles(): Vehicle[] {
    let vehicles: Vehicle[] = [];
    let vehicle1: Vehicle = new Car();
    vehicle1.setVehicleID(1);
    vehicle1.setVehicleType(VehicleType.CAR);
    let vehicle2: Vehicle = new Car();
    vehicle2.setVehicleID(2);
    vehicle2.setVehicleType(VehicleType.CAR);
    vehicles.push(vehicle1);
    vehicles.push(vehicle2);
    return vehicles;
}

//Add new store
function addStores(vehicles: Vehicle[]): Store[] {
    let stores: Store[] = [];
    let store1: Store = new Store();
    store1.storeId = 1;
    store1.setVehicles(vehicles);
    stores.push(store1);
    return stores;
}



function main() {
    console.log("============================START================================>>>>>>>>>");

    let users: User[] = addUsers();
    console.log("Users :: ", users);

    //0. User comes
    let user: User = users[0];
    console.log("First User :: ", user);

    let vehicles: Vehicle[] = addVehicles();
    console.log("Vehicles :: ", vehicles);

    let stores: Store[] = addStores(vehicles);

    let rentalSystem: VehicleRentalSystem = new VehicleRentalSystem(stores, users);


    //1. user search store based on location
    let location: Location = new Location(403012, "Bangalore", "Karnataka", "India");
    let store: Store = rentalSystem.getStore(location);
    console.log("store  :: ", store);

    //2. get All vehicles you are interested in (based upon different filters)
    let storeVehicles: Vehicle[] = store.getVehicles(VehicleType.CAR);
    console.log("storeVehicles  ::", storeVehicles);

    //3.reserving the particular vehicle
    let reservation:Reservation = store.createReservation(storeVehicles[0], users[0]);

    //4. generate the bill
    let bill:Bill = new Bill(reservation);

    //5. make payment
    let payment: Payment = new Payment();
    payment.payBill(bill);


    //6. trip completed, submit the vehicle and close the reservation
    store.completeReservation(reservation.reservationId);



    console.log("============================END================================>>>>>>>>>>>");
}


main();