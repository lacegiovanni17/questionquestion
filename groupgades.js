// describe("Example Tests", () => {
//   test("Example 1", () => {
//     expect(groupGrades([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])).toEqual({
//       failed: 4,
//       passed: 6,
//       exceptional: 2
//     });
//   });

//   test("Example 2", () => {
//     expect(groupGrades([70, 85, 90, 95, 96, 97, 98, 99])).toEqual({
//       failed: 0,
//       passed: 8,
//       exceptional: 6
//     });
//   });

function groupGrades(grades) {
  let failed = 0;
  let passed = 0;
  let exceptional = 0;
  grades.map((item, i) => {
    if (item < 50) {
      failed++;
    } else {
      passed++;
      } if (item >= 90) {
        exceptional++
    }
  });
  return { failed, passed, exceptional };
}
console.log(groupGrades([70, 85, 90, 95, 96, 97, 98, 99]));
