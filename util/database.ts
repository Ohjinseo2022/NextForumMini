import { MongoClient } from "mongodb";
const url: string = "mongodb+srv://admin:admin@cluster0.7oblx.mongodb.net/";
// const options = { useNewUrlParser : true } 몽고 DB 버전업으로 인해 현재따로 옵션을 주지 않아도 되는듯 싶음
let connectDB: any;

// if (process.env.NODE_ENV === "development") {
//   if (!global._mongo) {
//     global._mongo = new MongoClient(url).connect();
//   }
//   connectDB = global._mongo;
// } else {
connectDB = new MongoClient(url).connect();
// }
export { connectDB };
