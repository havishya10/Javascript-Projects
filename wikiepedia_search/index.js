let searchEl = document.getElementById("searchInput");
let resultContainer = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
  // creating result item
  let resultItemEl = document.createElement("div");
  resultItemEl.classList.add("result-item");
  resultContainer.appendChild(resultItemEl);
  // creating Title
  let { link, title, description } = result;
  let titleEl = document.createElement("a");
  titleEl.href = link;
  titleEl.targer = "_blank";
  titleEl.textContent = title;
  titleEl.classList.add("result-title");
  resultItemEl.appendChild(titleEl);
  // creating break Element
  let brEl = document.createElement("br");
  resultItemEl.appendChild(brEl);
  // creating URL Element
  let urlEl = document.createElement("a");
  urlEl.href = link;
  urlEl.target = "_blank";
  urlEl.textContent = link;
  urlEl.classList.add("result-url");
  resultItemEl.appendChild(urlEl);
  // creating Br Element
  let brEl2 = document.createElement("br");
  resultItemEl.appendChild(brEl2);
  // creating description element
  let descriptionEl = document.createElement("p");
  descriptionEl.classList.add("link-description");
  descriptionEl.textContent = description;
  resultItemEl.appendChild(descriptionEl);
}

function displayResults(searchResults) {
  spinner.classList.toggle("d-none");
  for (let i of searchResults) {
    createAndAppendSearchResult(i);
  }
}

function search(event) {
  if (event.key === "Enter") {
    spinner.classList.toggle("d-none");
    resultContainer.textContent = "";
    let query = searchEl.value;
    let url = `https://apis.ccbp.in/wiki-search?search=${query}`;
    let options = {
      method: "GET",
    };
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        let { search_results } = jsonData;
        displayResults(search_results);
      });
  }
}
searchEl.addEventListener("keydown", search);
