var users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: false,
      },
      {
        healthy: true,
      },
      {
        healthy: false,
      },
    ],
  },
];

const user = users[0];
const kidneys = user.kidneys;
const totalKidneys = kidneys.length;
const goodKidneys = kidneys.filter((kidney) => kidney.healthy == true);
const totalGoodKidneys = goodKidneys.length;
const totalBadKidneys = totalKidneys - totalGoodKidneys;
// console.log(goodKidneys);
users[0].kidneys = goodKidneys;
console.log(a);
