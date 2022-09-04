import axios from "axios"


const Tabs = (topics) => {

  const topicTitles = document.createElement('div');

  topicTitles.classList.add('topics');
  // const tabOne = document.createElement('div').classList.add('tab');
  // const tabTwo = document.createElement('div').classList.add('tab');
  // const tabThree = document.createElement('div').classList.add('tab');

  // tabOne.textContent = 'javascript';
  // tabTwo.textContent = 'bootstap';
  // tabThree.textContent = 'technology';

  topics.forEach(topic => {
    let tab = document.createElement('div');
    tab.classList.add('tab')
      tab.textContent = topic
      topicTitles.appendChild(tab)
  });
  
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  return topicTitles
}
// W/o Async
// const tabsAppender = (selector) => {

//   const root =  document.querySelector(selector)

//   axios.get('http://localhost:5001/api/topics')
//     .then(res => {
//       console.log(res)
//       const tabs = Tabs(res.data.topics)
//       root.appendChild(tabs)
//     })
//     .catch(err => {
//       console.log(err)
//     })

    
//   // TASK 4
//   // ---------------------
//   // Implement this function which takes a css selector as its only argument.
//   // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
//   // Find the array of topics inside the response, and create the tabs using the Tabs component.
//   // Append the tabs to the element in the DOM that matches the selector passed to the function.
//   //


// }

// with Async

const tabsAppender = async (selector) => {

  const root =  document.querySelector(selector)
  try {
  let res = await axios.get('http://localhost:5001/api/topics')
  console.log(res.data.topics)
  const tabs = Tabs(res.data.topics)

  root.appendChild(tabs)}
  catch(err){
    console.error(err)
  }
  

    
    
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}
export { Tabs, tabsAppender }
