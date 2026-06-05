// Program 92: Handle errors inside an async function using a try/catch block.
const server = (param) => {
  return new Promise((resolve, reject) => {
    if (param) {
      resolve(
        "Connect Successfully .....\nNo error Found\nYour Promise solved Successfully!....",
      );
    } else {
      const message = "This Promise not Fullfield Successfully!....";
      reject(new Error(message));
    }
  });
};
async function start(param) {
  try {
    console.log("Send Request to Connect Server........");

    const serverrun = await server(param);
    console.log("Success Result:", serverrun);
  } catch (error) {
    console.log("--- ERROR CAUGHT ---");
    console.error("Status: Failed");
    console.error("Reason:", error.message);
  } finally {
    console.log(
      "Process Complete.....\nThankyou To connect the Server........ ",
    );
  }
}
start(false);
