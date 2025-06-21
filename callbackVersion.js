function mowYard(name, callback) {
  setTimeout(() => {
    console.log(`${name} mowed the yard.`);
    callback();
  }, 2000);
}

function weedEat(name, callback) {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      console.log(`${name} finished using the weed eater.`);
      callback();
    } else {
      console.log(`${name} fell asleep after mowing the yard.`);
    }
  }, 1500);
}

function trimHedges(name, callback) {
  setTimeout(() => {
    if (Math.random() > 0.2) {
      console.log(`${name} finished trimmed the hedges.`);
      callback();
    } else {
      console.log(`${name} fell asleep after weed eating the yard.`);
    }
  }, 1000);
}

function collectWood(name, callback) {
  setTimeout(() => {
    if (Math.random() > 0.3) {
      console.log(`${name} finished collecting wood.`);
      callback();
    } else {
      console.log(`${name} fell asleep after trimming the hedges.`);
    }
  }, 2500);
}

function waterGarden(name, callback) {
  setTimeout(() => {
    if (Math.random() > 0.4) {
      console.log(`${name} finished watering the garden.`);
      callback();
    } else {
      console.log(`${name} fell asleep after collecting wood.`);
    }
  }, 500);
}

function doSummerChores(name) {
  mowYard(name, () => {
    weedEat(name, () => {
      trimHedges(name, () => {
        collectWood(name, () => {
          waterGarden(name, () => {
            console.log(`${name} finished all their chores!`);
          });
        });
      });
    });
  });
}

doSummerChores("Alice");
