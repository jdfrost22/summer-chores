function mowYard(name, callback) {
  setTimeout(() => {
    console.log(`${name} mowed the yard.`);
    callback();
  }, 2000);
}

function weedEat(name, callback) {
  setTimeout(() => {
    if  (Math.random() > 0.1) {
      console.log(`${name} finished weed eating.`);
      callback();
    }
    else {
      console.log(`${name} fell asleep after mowing the yard`);
    }
  }, 1500);
}


function doSummerChores(name) {
  mowYard(name, () => {
    weedEat(name, () => {
      console.log(`${name} finished all their chores!`);
    });
  });
}

doSummerChores("Alice");
