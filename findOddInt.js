function findOdd(arr) {
  const newArr = arr.reduce(
    (acc, num) => {
      if (!acc[0].includes(num)) {
        acc[0].push(num);
        acc[1].push({ num, count: 1 });
      } else {
        acc[1][acc[0].indexOf(num)].count += 1;
      }
      return acc;
    },
    [[], []]
  );
  return newArr[1].filter(e => e.count % 2 !== 0)[0].num;
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);

// [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2] result 5
