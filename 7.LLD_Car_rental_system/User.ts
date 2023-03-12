export class User {
    userId: number;
    userName: string;
    drivingLicense: number;

    public getUserId(): number {
        return this.userId;
    }

    public setUserId(userId: number) {
        this.userId = userId;
    }

    public getUserName(): string {
        return this.userName;
    }

    public setUserName(userName: string) {
        this.userName = userName;
    }

    public getDrivingLicense(): number {
        return this.drivingLicense;
    }

    public setDrivingLicense(drivingLicense: number) {
        this.drivingLicense = drivingLicense;
    }
}

