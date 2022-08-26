const newComment = document.querySelector("#comment");
const existingComments = document.querySelector(".existing-comments");
const button = document.querySelector("button");

function addComment() {
  const coolDate = new Date();
  const coolMinutes =
    coolDate.getMinutes() < 10
      ? `0${coolDate.getMinutes()}`
      : coolDate.getMinutes();
  const dateString = `${coolDate.getHours()}:${coolMinutes} ${coolDate.getMonth()}/${coolDate.getDate()}/${coolDate.getFullYear()}`;
  const comment = `
  <img src="" alt="" />
  <span class="username">Ben Stiller</span>
  <span class="post-date">${dateString}</span>
  <p class="comment-content">
    ${newComment.value}
  </p>
  `;
  const commentElement = document.createElement("div");
  commentElement.className = "comment";
  commentElement.innerHTML = comment;
  existingComments.prepend(commentElement);
}

button.addEventListener("click", addComment);
