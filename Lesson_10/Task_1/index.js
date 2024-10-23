const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

let userOnlineNames = '';

users.forEach(user => {
    if (user.status === 'online') userOnlineNames += user.username + ', ';
});

if (userOnlineNames) userOnlineNames = userOnlineNames.slice(0, -2);

alert(`Сейчас в онлайн следующие пользователи: ${userOnlineNames}`);