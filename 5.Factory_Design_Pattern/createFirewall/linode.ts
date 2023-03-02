import { cloudProvider } from "../interface/cloudProvider.interface";

export class Linode implements cloudProvider{
    
    /**
     * Create firewall
     */
    createFireWall() {
        console.log("Firewall created for provider - linode");
    }


    /**
     * Update database after create firewall
     */
    updateDatabaseAfterCreateFirewall() {
        console.log("Database updated, after creation firewall - linode");
    }
}