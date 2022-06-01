import fetch from "node-fetch";
//. Callback
// export const weatherCode = async (url, callback) => {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     callback(undefined, data);
//   } catch (error) {
//     console.log('weatherCode error')
//     callback(error, undefined);
//   }
// };
//.Promise
export const weatherCode = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      resolve(data);
    } catch (error) {
      console.log("weatherCode error");
      reject(error);
    }
  });
};
/* -------------------------------------------------------------------------- */
/* ------------------------------------ ----------------------------------- */
// export const weatherCode = async (url, callback) => {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     callback(undefined, data)
//   } catch (error) {
//       callback(error, undefined)
//   }
// };
