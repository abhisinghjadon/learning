// Program 100: Implement a sequential async loop that executes promises one after the other in order.

const processItem = (item, delayTime) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`✅ Processed: ${item}`);
      resolve();
    }, delayTime);
  });
};

async function runSequentialLoop() {
  const tasks = ["Task A", "Task B", "Task C", "Task D"];

  console.log("Sequential execution started...");
  const startTime = Date.now();

  for (const task of tasks) {
    console.log(`🔄 Starting ${task}...`);
    await processItem(task, 1000);
  }

  const totalTime = (Date.now() - startTime) / 1000;
  console.log(` All tasks completed in ${totalTime} seconds!`);
}

runSequentialLoop();
