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

}

console.log(searchDevices(devicesArray, searchObject));

// testsTask(searchDevices); //Не удалять, нужно для проверки задачи
