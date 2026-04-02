function makeFriendsList(friends) {
  let list = document.createElement("ul");

  for (let i = 0; i < friends.length; i++){
    let itemList = document.createElement("li");
    itemList.textContent = `${friends[i].firstName} ${friends[i].lastName}`;
    list.append(itemList);
  }
  return list;
}
