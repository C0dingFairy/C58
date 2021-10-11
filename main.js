var images = [
  "https://images.unsplash.com/photo-1562022791-b74585b094d8?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTgwNTQzMA&ixlib=rb-1.2.1&q=85",
  "https://images.unsplash.com/photo-1597520595747-23260411dc4e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTgwNzEwMQ&ixlib=rb-1.2.1&q=85",
  "https://images.unsplash.com/photo-1542826438-bd32f43d626f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTgwNzE2Nw&ixlib=rb-1.2.1&q=85",
  "https://images.unsplash.com/photo-1614174486496-344ef3e9d870?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTgwNzI3Mw&ixlib=rb-1.2.1&q=85"
];

var i = 0;
function nextslide() {
  document.getElementById("arrayBake").src = images[i];
  if (i == 3) {
    i = 0;
  }
  i++;
}
