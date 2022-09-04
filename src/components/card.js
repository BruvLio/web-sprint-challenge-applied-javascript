import axios from "axios"

const Card = (article) => {

    const cardHandle = document.createElement('div');
    const headlineTittle = document.createElement('div');
    const authorTittle = document.createElement('div');
    const imgElement = document.createElement('div');
    const imgSrc = document.createElement('img');
    const authorName = document.createElement('span');


    cardHandle.classList.add('card');
    headlineTittle.classList.add('headline');
    authorTittle.classList.add('author');
    imgElement.classList.add('img-container');
    imgSrc.src = article.authorPhoto
    authorName.textContent = `By ${article.authorName}`
    headlineTittle.textContent = article.headline

    cardHandle.addEventListener('click', () => {
      console.log(article.headline)
    })

    cardHandle.appendChild(headlineTittle);
    cardHandle.appendChild(authorTittle);

    authorTittle.appendChild(imgElement);
    authorTittle.appendChild(authorName)

    imgElement.appendChild(imgSrc);

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  return cardHandle
}

const cardAppender = async (selector) => {

  const root =  document.querySelector(selector)
  try {
  let res = await axios.get('http://localhost:5001/api/articles')
  console.log(Object.entries(res.data.articles))
  Object.entries(res.data.articles).forEach(arrArticles => {
    arrArticles[1].forEach(article => {
      root.appendChild(Card(article))
    })
  });
  }
  catch(err){
    console.error(err)
  }
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
