import { DigitalOcean } from "./createFirewall/do";
import { Linode } from "./createFirewall/linode";
import { Upcloud } from "./createFirewall/upcloud";
import { Vultr } from "./createFirewall/vultr";
import { cloudProvider } from "./interface/cloudProvider.interface"

console.log("Start.......")
class factoryClass {
    createObj(value): cloudProvider {
        switch (value) {
            case 'linode':
                return new Linode();

            case 'vultr':
                return new Vultr();

            case 'upcloud':
                return new Upcloud();

            default:
                return new DigitalOcean;
        }
    }
}

//start
const factoryObj = new factoryClass();
let obj: cloudProvider = factoryObj.createObj('linode');
obj.createFireWall();
obj.updateDatabaseAfterCreateFirewall();


