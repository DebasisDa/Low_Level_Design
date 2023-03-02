export interface publisher {
    subscriber(subscriberInterface);
    unSubscribe();
    updateStock(data);
}