export default defineEventHandler(async (event) => {
  return new Promise<any>((resolve, reject)=>{
    setTimeout(()=> {
      resolve({ hello:"world" });
    }, 2000);
  });
});
