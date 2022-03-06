// window.onload = () => {
//   const btn = document.querySelector("#btn");
//   const output = document.querySelector('#output');

//   btn.addEventListener("click", () => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/comments`)
//       .then((res) => {

//         const posts = res.data;
//         posts.forEach( post => {
//             let title = post.name;

//             output.innerHTML += `<li>${title}</li>`;
//         } );

//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });
// };


let obj = {
  name: "Shams Mahmud",
  age: 12,
  subject: "Higher Math"
}


let {name, age} = obj;

let arr = [() => {}, () => {}];

let [fun1,fun2] = arr;
