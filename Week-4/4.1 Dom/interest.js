const btn = document.getElementById("btn");
const p = document.querySelector("#p");
const r = document.getElementById("r");
const t = document.getElementById("t");

btn.addEventListener("click", async () => {
  const pr = parseInt(p.value);
  const ra = parseInt(r.value);
  const tm = parseInt(t.value);

  if (isNaN(pr) || isNaN(ra) || isNaN(tm)) {
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
      `https://sum-server.100xdevs.com/interest?principal=${pr}&rate=${ra}&time=${tm}`
    );
    const data = await feth.text();
    const ans = JSON.parse(data);
    para.innerText = `Total: ${ans.total}  & interest=${ans.interest}`;
  }
});
