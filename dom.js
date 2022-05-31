const data = async () => {
  try {
    let response = await fetch('https://catfact.ninja/facts');
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

data();

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

const button = document.querySelector('#submit');

button.addEventListener('click', () => {
  postData();
});

function postData() {
  const userId = document.querySelector('#userId').value;
  const id = document.querySelector('#id').value;
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      userId: userId,
      id: id,
      title: title,
      body: body,
    }),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

fetchData();
