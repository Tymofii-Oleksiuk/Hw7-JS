const arr = [1, 2, 3, 4, 5];
arr[1] = 10;
console.log("Завданння 1", arr);

const arr1 = ["anna", "lila", "anton"];
arr1.push("roma");
console.log("Завданння 2", arr1);

const arr2 = [56, 76, 94, 23];
let total = 0;
for (let i = 0; i < arr2.length; i++) {
  total = total + arr2[i];
}
console.log("Завданння 3", total);

const arr3 = [43, "frfrfr", 233, 343];
for (let i = 0; i < arr2.length; i++) {
  console.log("Завданння 4", arr3[i]);
}

const arr4 = ["cars", "pink", "aplle", "ananas"];
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i].length >= 5) {
    console.log("Завдання 5", arr4[i]);

    continue;
  }
}

const arr5 = [13, 58, 123, 86, 45, 90, 54, 32, 75, 13];
let sum = 0;
for (let i = 0; i < 9; i++) {
  sum = sum + arr5[i];
}
console.log("Завдання 6", sum);

const arr6 = [133, 58, 113, 286, 25, 90, 524, 42, 75, 313];

for (let i = 0; i < 9; i++) {
  if (arr6[i] % 2 === 0) {
    console.log(arr6[i]);
  }
}
