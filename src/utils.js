import db from "./firebase";

const createChat = () => {
  const roomName = prompt("Please enter name for the chat");

  if (roomName) {
    // do sth
    db.collection("rooms").add({
      name: roomName,
    });
  }
};

export default createChat;
