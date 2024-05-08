const btn = document.getElementById("btn");
const num1 = document.querySelector("#num-1");
const num2 = document.getElementById("num-2");
const para = document.getElementById("para");

btn.addEventListener("click", async () => {
  const val1 = parseInt(num1.value);
  const val2 = parseInt(num2.value);
  if (isNaN(val1) || isNaN(val2)) {
    para.innerText = "Invalid input";
  } else {
    // fetch(`https://sum-server.100xdevs.com/sum?a=${val1}&b=${val2}`).then(
    //   (res) => {
    //     res.text().then((an) => {
    //       para.innerText = `${val1} + ${val2} = ${an}`;
    //     });
    //   }
    // );
    const feth = await fetch(
      `https://sum-server.100xdevs.com/sum?a=${val1}&b=${val2}`
    );
    const ans = await feth.text();
    para.innerText = `${val1} + ${val2} = ${ans}`;
  }
});
