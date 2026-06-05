// Program 91: Convert a promise-based chain into modern async/await syntax.
const authenticate = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userid: 101, username: "Abhishek" });
    }, 1000);
  });
};
const featchData = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Admin", "Dashboard"]);
    }, 1000);
  });
};
const permission = (permissionslist) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Access Granted for ${permissionslist.join(", ")}`);
    }, 1000);
  });
};

async function start() {
  try {
    const user = await authenticate();
    console.log(`1. User Authenticated: ${user.username}`);
    const permissions = await featchData(user);
    console.log("Data Featch Successfully!...");
    const final = await permission(permissions);
    console.log(`Final :`, final);
  } catch (error) {
    console.error("Something Error");
  }
}

start();
