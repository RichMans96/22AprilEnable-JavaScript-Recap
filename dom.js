// const data = async () => {
//   await fetch('https://catfact.ninja/facts')
//     .then((res) => {
//       if (res.status != 200) console.error(res.status);
//       return res;
//     }
//     res.json().then((data) => {
//         return data;
//     });
//     )
//     .catch((err) => console.log(err));
// };

function fetchData() {
  fetch('https://catfact.ninja/facts')
    .then((resp) => resp.json())
    .then((data) => showAllFacts(data));
}

function showAllFacts({ data }) {
  const rootElement = document.getElementsByClassName('root')[0];
  for (let fact of data) {
    const newDiv = document.createElement('div');
    const p = document.createElement('p');

    p.append(document.createTextNode(fact.fact));
    newDiv.appendChild(p);
    rootElement.appendChild(newDiv);
  }
}

function fetchDataTest() {
  fetch('https://jsonplaceholder.typicode.com/posts').then((resp) => console.log(resp.json()));
}

function postData() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      userId: 1,
      id: 101,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure',
    }),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

fetchData();

postData();

fetchDataTest();
// https://jsonplaceholder.typicode.com/posts
