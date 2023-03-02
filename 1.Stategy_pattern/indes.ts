interface Stategy {
    sendNotification();
}

class EmailNotification implements Stategy {
    sendNotification() : void{
        console.log("Send notification to email");
    }
}

class RealTimeNotification implements Stategy {
    sendNotification() : void{
        console.log("Send notification to browser using socket I/O");
    }
}

class MobileNotification implements Stategy {
    sendNotification() : void{
        console.log("Send notification to user mobile via message");
    }
}

class WhatsappNotification implements Stategy {
    sendNotification() : void{
        console.log("Send notification to user whatsapp");
    }
}

class NotificationClass {
    private strategy: Stategy;

    constructor(strategy: Stategy){
        this.strategy = strategy;
    }

    public setSrategy (strategy: Stategy): void{
        this.strategy = strategy;
    }

    public notification():void {
        this.strategy.sendNotification();
    }
}


     let notificationObj = new NotificationClass(new EmailNotification);
     notificationObj.notification();

