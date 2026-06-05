// Program 90: Chain multiple Promises together sequentially.
const authenticate = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1. user authentication Successfully!");
      resolve({ userid: 101, username: "Abhishek" });
    }, 1000);
  });
};
const featch = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`2.Data featch for user ${user.username}`);
      resolve(["Dashboard", "Admin"]);
    }, 1000);
  });
};
const permission = (permissionlist) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("3.Permisssions processed");
      resolve(`Access Granted for ${permissionlist.join(",")}`);
    }, 1000);
  });
};
authenticate()
  .then((user) => {
    return featch(user);
  })
  .then((userpermission) => {
    return permission(userpermission);
  })
  .then((final) => {
    console.log("Final ", final);
  })
  .catch((error) => {
    console.error("something Error ");
  });

//some more promise
/*
  const pr1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello");
  }, 1000);
});
const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello");
  }, 2000);
});
const pr3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello");
  }, 3000);
});
pr1
  .then((msg1) => {
    console.log(msg1);
    return pr2;
  })
  .then((msg2) => {
    console.log(msg2);
    return pr3;
  })
  .then((msg3) => {
    console.log(msg3);
  });
*/
