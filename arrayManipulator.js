function solve(input) {
  let array = input.shift();
  let command = input.shift();
  while (command !== "end") {
    let [action, firstArg, secondArg] = command.split(" ");
    switch (action) {
      case "exchange":
        let index = Number(firstArg);
        if (index < 0 || index > array.length - 1) {
          console.log("Invalid index!");
          command = input.shift();
          continue;
        }
        array = exchange(array, index);
        break;
      case "max":
        let output = max(array, firstArg);
        if (output === -1) {
          console.log("No matches");
        } else {
          console.log(output);
        }
        break;
      case "min":
        let result = min(array, firstArg);
        if (result === -1) {
          console.log("No matches");
        } else {
          console.log(result);
        }
        break;
      case "first":
        let counter = Number(firstArg);
        if (counter > array.length) {
          console.log("Invalid count");
        } else {
          first(array, firstArg, secondArg);
        }
        break;
      case "last":
        let count = Number(firstArg);
        if (count > array.length) {
          console.log("Invalid count");
        } else {
          last(array, firstArg, secondArg);
        }
        break;
    }
    command = input.shift();
  }
  function last(array, count, argument) {
    let arr = array;
    let reversedArray = arr.reverse();
    let newArr = [];
    let counter = 0;

    if (argument === "even") {
      for (let i = 0; i < reversedArray.length; i++) {
        if (reversedArray[i] % 2 === 0) {
          newArr.push(array[i]);
          counter++;
        }
        if (counter === count) {
          break;
        }
      }
    } else if (argument === "odd") {
      for (let i = 0; i < reversedArray.length; i++) {
        if (reversedArray[i] % 2 !== 0) {
          newArr.push(array[i]);
          counter++;
        }
        if (counter === count) {
          break;
        }
      }
    }
    console.log(newArr.reverse());
    return array.reverse();
  }

  function first(array, count, argument) {
    count = Number(count);
    let newArr = [];
    let counter = 0;

    if (argument === "even") {
      for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
          newArr.push(array[i]);
          counter++;
        }
        if (counter === count) {
          break;
        }
      }
    } else if (argument === "odd") {
      for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
          newArr.push(array[i]);
          counter++;
        }
        if (counter === count) {
          break;
        }
      }
    }
    console.log(newArr);
  }

  function exchange(array, index) {
    index = Number(index);
    let firstArr = [];
    let secondArr = [];

    let firstArrCounter = 0;

    for (let i = index + 1; i < array.length; i++) {
      firstArr[firstArrCounter] = array[i];
      firstArrCounter++;
    }

    for (let i = 0; i < index + 1; i++) {
      secondArr[i] = array[i];
    }

    for (let i = 0; i < firstArr.length; i++) {
      array[i] = firstArr[i];
    }
    for (let i = 0; i < secondArr.length; i++) {
      array[firstArr.length + i] = secondArr[i];
    }
    return array;
  }

  function max(array, firstArg) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    let index = -1;
    if (firstArg === "even") {
      for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
          if (array[i] > biggestNum) {
            biggestNum = array[i];
            index = i;
          }
        }
      }
    } else if (firstArg === "odd") {
      for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
          if (array[i] > biggestNum) {
            biggestNum = array[i];
            index = i;
          }
        }
      }
    }
    return index;
  }

  function min(array, firstArg) {
    let lowestNumber = Number.MAX_SAFE_INTEGER;
    let index = -1;
    if (firstArg === "even") {
      for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
          if (array[i] < lowestNumber) {
            lowestNumber = array[i];
            index = i;
          }
        }
        lowestNumber;
      }
    } else if (firstArg === "odd") {
      for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
          if (array[i] < lowestNumber) {
            lowestNumber = array[i];
            index = i;
          }
        }
      }
    }
    return index;
  }
  console.log(array);
}
solve([
  [1, 10, 100, 1000],
  "exchange 3",
  "first 2 odd",
  "last 4 odd",
  "end",
]);