import fetch from "node-fetch";
export const weatherCode = async (url, callback) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    callback(undefined, data);
  } catch (error) {
    console.log('weatherCode error')
    callback(error, undefined);
  }
};
// export const weatherCode = async (url, callback) => {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     callback(undefined, data)
//   } catch (error) {
//       callback(error, undefined)
//   }
// };
