import { devices } from './data.js';
// import { testsTask } from "./tests.js"; //Не удалять, нужно для проверки задачи

const devicesArray = devices; // массив с данными из файла data

const searchObject = {
  sortBy: "Createdate",
  sortDirection: "asc",
  searchText: "dsfgds",
  year: "2022",
  month: "12",
};

const searchDevices = (devices, searchObject) => {
  if (Object.values(searchObject).length < 1 || !devices) return devices;

  let result = devices.filter(el => {
    if (searchObject.searchText && !el.iotDevice.thingGroupName.includes(searchObject.searchText)) return false;
    if (searchObject.year && !el.iotDevice.Createdate.split('-')[0] == searchObject.year) return false;
    if (searchObject.month && !el.iotDevice.Createdate.split('-')[1] == searchObject.month) return false;

    return true;
  });

  result = result.sort((a, b) => a[searchObject.sortBy] > b[searchObject.sortBy] ? 1 : -1);

  if (searchObject.sortDirection === "asc") return result;
  if (searchObject.sortDirection === "desc") return result.reverse();
}

const mostRecent = (devices, searchObject) =>
  searchDevices(devices, searchObject).reduce((acc, val) => new Date(acc.iotDevice.Createdate) > new Date(val.iotDevice.Createdate) ? acc : val);

console.log(searchDevices(devicesArray, searchObject));
console.log(mostRecent(devicesArray, searchObject));

// testsTask(searchDevices); //Не удалять, нужно для проверки задачи
