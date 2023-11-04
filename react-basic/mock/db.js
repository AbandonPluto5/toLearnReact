const { faker } = require("@faker-js/faker");

module.exports = () => {
  return {
    list: new Array(5).fill({
      name: faker.person.fullName(),
      email: faker.internet.email(),
    }),
  };
};
