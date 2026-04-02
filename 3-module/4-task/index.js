function showSalary(users, age) {
  let usersFiltered = users.filter(user => user.age <= age);
  let str = usersFiltered.map(item => `${item.name}, ${item.balance}`);
  return str.join("\n");
}
