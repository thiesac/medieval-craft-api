const validPassword = '$2a$10$uhkbId.BoDtwlc4/59144.2u7ZnMGo3Z7flfA7hwh0';

const noUsernameLoginBody = {
  username: '',
  password: validPassword
};

const validLoginBody = {
  username: 'Hagar',
  password: validPassword
}

const existingUser = {
  id: 1,
  username: 'Hagar',
  vocation: 'Guerreiro',
  level: 10,
  password: validPassword,
};

export default {
  noUsernameLoginBody,
  validLoginBody,
  existingUser,
}