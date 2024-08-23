
const posts = [
  {
    id: 1,
    username: 'Johndoe',
    image: 'https://picsum.photos/200/300',
    caption: 'Hello, world!'
  },
  {
    id: 2,
    username: 'janeDoe',
    image: 'https://picsum.photos/200/301',
    caption: 'This is a test post'
  },
  
];


function renderFeed() {
  const feedContainer = document.getElementById('feed');
  feedContainer.innerHTML = '';

  posts.forEach((post) => {
    const postHTML = `
      <div class="post">
        <img src="${post.image}" alt="${post.username}">
        <p>${post.caption}</p>
        <p>Posted by ${post.username}</p>
      </div>
    `;
    feedContainer.insertAdjacentHTML('beforeend', postHTML);
  });
}


renderFeed();


document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = event.target.getAttribute('href');
      document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    });
  });
});
