const User = require('../../../../src/app/components/users/repositories/interface/UserModelInterface');
const UserRepository = require('../../../../src/app/components/users/repositories/interface/UserRepositoryInterface');
const mockUserRepository = new UserRepository();
const GetUser = require('../../../../src/app/components/users/services/GetUser');

test('should resolve with the corresponding persisted user entity', async () => {
  // given
  const correspondingUser = new User(123, 'John', 'Doe', 'john.doe@email.com', 'P@s$W0rD');
  mockUserRepository.get = jest.fn((userId) => correspondingUser);

  // when
  const user = await GetUser(123, { userRepository: mockUserRepository });

  // then
  expect(mockUserRepository.get).toHaveBeenCalledWith(123);
  expect(user).toEqual(correspondingUser);
});
