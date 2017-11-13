const articles = document.querySelectorAll('.editable');
const buttons = document.querySelectorAll('.readMore');
const editBtn = document.getElementById('editNews');

for (let i = 0; i < articles.length; i++){
  articles[i].addEventListener('click', expand);
}
var previoussibling = document.getElementByid();
function expand() {
  if() {

  }
  else{}
}

function editableContent() {
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].contentEditable == 'false'||'null') {
      articles[i].contenteditable = 'true';
      console.log("Article number: " + (i+1) );
      console.log(articles[i].contenteditable);
    } else {
      console.log('i am in the else-statement')
    }
  }
}

function createPost() {
  var newPost = document.getElementById('create-post');
  if (newPost.style.display == 'none'||'null') {
    newPost.style.display = 'block';
    console.log('New post is Block/visible');
  } else {
    newPost.style.display = 'none';
  }
}

function newPostSave() {
  // var toggle = document.getElementById('toggleable');
  var newPost = document.getElementById('create-post');
  console.log('Creating new post');

  if (newPost.style.display == 'block') {
    newPost.style.display = 'none';
    console.log('New post is hidden');
  }
}
