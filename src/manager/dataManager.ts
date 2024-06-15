class DataManager {
    private dataMap: { [key: string]: any } = {};

    setData(key: string, value: any): void {
        this.dataMap[key] = value;
    }

    getData(key: string): any {
        return this.dataMap[key];
    }
}

const dataManager = new DataManager();
export default dataManager;
