export default defineEventHandler(async (event) => {
  return new Promise<any>((resolve)=>{
    setTimeout(()=> {
      resolve({ hello:"world" });
    }, 2000);
  });
});
