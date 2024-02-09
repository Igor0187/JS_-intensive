import fetch from 'node-fetch';

function callComments() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/comments/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function callPosts() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts/2')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

async function Data() {
  try {
    comments = await callComments();
    console.log('Comments:', comments);

    posts = await callPosts();
    console.log('Posts:', posts);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

Data();