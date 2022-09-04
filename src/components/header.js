const Header = (title, date, temp) => {

const heading = document.createElement('div');
const dateDisplay = document.createElement('span');
const tittleDisplay = document.createElement('h1');
const tempDisplay = document.createElement('span');

heading.classList.add('header');
dateDisplay.classList.add('date');
tempDisplay.classList.add('temp');

// class names

dateDisplay.textContent = date;
tittleDisplay.textContent = title;
tempDisplay.textContent = temp;

heading.appendChild(dateDisplay);
heading.appendChild(tittleDisplay);
heading.appendChild(tempDisplay);

return heading;

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {

 const root =  document.querySelector(selector)

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  root.appendChild(Header('Test Tittle', "9/4/2022", '79 degrees'))
  
}

export { Header, headerAppender }
