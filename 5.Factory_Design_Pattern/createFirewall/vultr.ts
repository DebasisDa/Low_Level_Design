import { cloudProvider } from "../interface/cloudProvider.interface";

export class Vultr implements cloudProvider{
    
    /**
     * Create firewall
     */
    createFireWall() {
        console.log("Firewall created for provider - vultr");
    }


    /**
     * Update database after create firewall
     */
    updateDatabaseAfterCreateFirewall() {
        console.log("Database updated, after creation firewall - vultr");
    }
}