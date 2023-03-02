import { cloudProvider } from "../interface/cloudProvider.interface";

export class DigitalOcean implements cloudProvider{
    
    /**
     * Create firewall
     */
    createFireWall() {
        console.log("Firewall created for provider - Digital ocean");
    }


    /**
     * Update database after create firewall
     */
    updateDatabaseAfterCreateFirewall() {
        console.log("Database updated, after creation firewall - Digital ocean");
    }
}