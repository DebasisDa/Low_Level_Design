"use strict";
exports.__esModule = true;
var Bill_1 = require("./Bill/Bill");
var Payment_1 = require("./Bill/Payment");
var Location_1 = require("./Location");
var Car_1 = require("./product/Car");
var vehicleType_1 = require("./product/vehicleType");
var Store_1 = require("./Store");
var User_1 = require("./User");
var VehicleRentalSystem_1 = require("./VehicleRentalSystem");
//Add new user
function addUsers() {
    var users = [];
    var user1 = new User_1.User();
    user1.setUserId(1);
    user1.setUserName("Debasis Das");
    user1.setDrivingLicense(12345);
    users.push(user1);
    return users;
}
//Add new vehicle
function addVehicles() {
    var vehicles = [];
    var vehicle1 = new Car_1.Car();
    vehicle1.setVehicleID(1);
    vehicle1.setVehicleType(vehicleType_1.VehicleType.CAR);
    var vehicle2 = new Car_1.Car();
    vehicle2.setVehicleID(2);
    vehicle2.setVehicleType(vehicleType_1.VehicleType.CAR);
    vehicles.push(vehicle1);
    vehicles.push(vehicle2);
    return vehicles;
}
//Add new store
function addStores(vehicles) {
    var stores = [];
    var store1 = new Store_1.Store();
    store1.storeId = 1;
    store1.setVehicles(vehicles);
    stores.push(store1);
    return stores;
}
function main() {
    console.log("============================START================================>>>>>>>>>");
    var users = addUsers();
    console.log("Users :: ", users);
    //0. User comes
    var user = users[0];
    console.log("First User :: ", user);
    var vehicles = addVehicles();
    console.log("Vehicles :: ", vehicles);
    var stores = addStores(vehicles);
    var rentalSystem = new VehicleRentalSystem_1.VehicleRentalSystem(stores, users);
    //1. user search store based on location
    var location = new Location_1.Location(403012, "Bangalore", "Karnataka", "India");
    var store = rentalSystem.getStore(location);
    console.log("store  :: ", store);
    //2. get All vehicles you are interested in (based upon different filters)
    var storeVehicles = store.getVehicles(vehicleType_1.VehicleType.CAR);
    console.log("storeVehicles  ::", storeVehicles);
    //3.reserving the particular vehicle
    var reservation = store.createReservation(storeVehicles[0], users[0]);
    //4. generate the bill
    var bill = new Bill_1.Bill(reservation);
    //5. make payment
    var payment = new Payment_1.Payment();
    payment.payBill(bill);
    //6. trip completed, submit the vehicle and close the reservation
    store.completeReservation(reservation.reservationId);
    console.log("============================END================================>>>>>>>>>>>");
}
main();
