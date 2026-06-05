// Program 99: Create a promise that rejects with a specific custom Error object type.

//make new Error

class DatabaseError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.name = "DatabaseError";
    this.code = errorCode;
    this.timestamp = new Date().toISOString();
  }
}
new DatabaseError("Unable to reach DB Server", "DB_CONN_TIMEOUT");

function connect(params) {
  return new Promise((resolve, reject) => {
    console.log("Connecting to database...");
    setTimeout(() => {
      if (params) {
        reject(
          new DatabaseError("Unable to reach DB Server", "DB_CONN_TIMEOUT"),
        );
      } else {
        resolve("Solve Promise Successfully!.....");
      }
    }, 2000);
  });
}
connect(true)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log("--- CUSTOM ERROR CAUGHT ---");

    console.error(`Error Type: ${error.name}`);
    console.error(`Message:    ${error.message}`);
    console.error(`Error Code: ${error.code}`);
    console.error(`Time:       ${error.timestamp}`);
  });
