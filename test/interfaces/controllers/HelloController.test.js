const SayHello = require('../../../src/app/components/hello/services/HelloServices');
const HelloController = require('../../../src/app/components/hello/HelloController');

jest.mock('../../../src/app/components/hello/services/HelloServices');

describe('#sayHelloWorld', () => {

  test('should resolves', async () => {
    // given
    SayHello.mockImplementationOnce(() => 'Bonjour monde !');

    // when
    const response = await HelloController.sayHelloWorld();

    // then
    expect(response).toBe('Bonjour monde !');
  });
});

describe('#sayHelloPerson', () => {

  test('should resolves', async () => {
    // given
    SayHello.mockImplementationOnce(() => 'Buongiorno John !');
    const request = { params: { name: 'John' } };

    // when
    const response = await HelloController.sayHelloPerson(request);

    // then
    expect(response).toBe('Buongiorno John !');
  });
});


