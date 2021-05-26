const UserRepository = require('../../../../src/app/components/users/repositories/interface/UserRepositoryInterface');
const mockUserRepository = new UserRepository();
const ListUsers = require('../../../../src/app/components/users/services/ListUser');

test('should resolve with all the users persisted in repository', async () => {
  // given
  mockUserRepository.find = () => ['John', 'Jane'];

  // when
  const users = await ListUsers({ userRepository: mockUserRepository });

  // then
  expect(users).toEqual(['John', 'Jane']);
});
