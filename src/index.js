import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const sortfunction = (a, b) => {
  return a - b;
};

function makeArrayConsecutive2(statues) {
  let sortArr = [];
  let arr = [];

  sortArr = statues.sort(sortfunction);
  let maxNumber = Math.max.apply(null, sortArr);
  let minNumber = Math.min.apply(null, sortArr);

  for (let i = 0; i <= maxNumber; i++) {
    arr.push(i);
  }
  let sumc = arr.filter(n => sortArr.indexOf(n) === -1);
  console.log(sumc);

  console.log(arr);
  console.log(sortArr);
  let newArr = sumc.filter(n => n >= minNumber && n >= 1);
  console.log("test", newArr);
  return newArr.length;
}

const statuesArr = [2, 3, 6, 2, 3, 7];

console.log(makeArrayConsecutive2(statuesArr));
