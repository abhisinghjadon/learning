// Program 90: Chain multiple Promises together sequentially.

const system = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let mess = "System Initialization";
      resolve(mess);
    }, 2000);
  });
};

const user = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let mess = "Finding Data for " + username;
      resolve(mess);
    }, 2000);
  });
};

system()
  .then((sysMsg) => {
    console.log(sysMsg);
    return user("Abhishek");
  })
  .then((userMsg) => {
    console.log(userMsg);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
