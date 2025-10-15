let page = 1;

async function fetchData(page) {
  const res = await fetch(
    `https://dummyjson.com/users?limit=10&skip=${(page - 1) * 10}`
  );
  const json = await res.json();
  showData(json.users);
}

fetchData(page);

function showData(json) {
  const tbody = document.getElementById("tbody");

  json.forEach((element) => {
    const tr = document.createElement("tr");
    const tr1 = document.createElement("td");
    tr1.innerText = element.id;

    const tr2 = document.createElement("td");
    tr2.innerText = `${element.firstName}  ${element.lastName}`;

    const tr3 = document.createElement("td");
    tr3.innerText = element.age;

    tr.appendChild(tr1);
    tr.appendChild(tr2);
    tr.appendChild(tr3);
    tbody.appendChild(tr);
  });
}

//Infinite Scroll

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    page++;
    fetchData(page);
  }
});
