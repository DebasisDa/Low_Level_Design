import { cloudProvider } from "../interface/cloudProvider.interface";

export class Upcloud implements cloudProvider{
    
    /**
     * Create firewall
     */
    createFireWall() {
        console.log("Firewall created for provider - upcloud");
    }


    /**
     * Update database after create firewall
     */
    updateDatabaseAfterCreateFirewall() {
        console.log("Database updated, after creation firewall - upcloud");
    }
}