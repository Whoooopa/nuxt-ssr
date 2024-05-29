// export default defineEventHandler(async (event) => {
//   console.log(event);
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ hello: 'world' });
//     }, 2000);
//   });
// });
export default defineEventHandler((event) => {
  return {
    hello: "world",
  }
});