const os = require("os");

// const user1 = os.userInfo();

// console.log(user1);

// console.log(`The System uptime ${os.uptime()}`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
