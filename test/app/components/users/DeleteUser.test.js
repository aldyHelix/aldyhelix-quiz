const UserRepository = require('../../../../src/app/components/users/repositories/interface/UserRepositoryInterface');
const mockUserRepository = new UserRepository();
const DeleteUser = require('../../../../src/app/components/users/services/DeleteUser');

test('should resolve (without result)', async () => {
  // given
  mockUserRepository.remove = jest.fn(() => true);

  // when
  await DeleteUser(123, { userRepository: mockUserRepository });

  // then
  expect(mockUserRepository.remove).toHaveBeenCalledWith(123);
});
