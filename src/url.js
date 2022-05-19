// const anotherFile = new URL("", import.meta.url);
// console.log(anotherFile);
// console.log("anotherFile", import.meta.url);

import * as url from "url";
const __filename = url.fileURLToPath(import.meta.url);
// const __filename2 = url.fileURLToPath(new URL("", import.meta.url));
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

