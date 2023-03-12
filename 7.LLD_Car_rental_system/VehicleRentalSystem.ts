import { Location } from "./Location";
import { Store } from "./Store";
import { User } from "./User";

export class VehicleRentalSystem {

    storeList: Store[];
    userList: User[];

    constructor(stores: Store[], users: User[]) {
        this.storeList = stores;
        this.userList = users;
    }


    public getStore(location: Location):Store{
        //based on location, we will filter out the Store from storeList.
        return this.storeList[0];
    }

}
