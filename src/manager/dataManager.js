class DataManager {
    dataMap = {};

    setData(key, value) {
        this.dataMap[key] = value;
    }

    getData(key) {
        return this.dataMap[key];
    }
}

const dataManager = new DataManager();
export default dataManager;