const reminder = require('../../commands/agenda/reminder');

describe('Test del reminder', () => {
  const messageMock = {
    reply: jest.fn()
  };

  test('Faltan argumentos', () => {
    const args = ['10:20', '10/12/2022'];
    const expectedOutput = 'faltan argumentos';
    reminder.run(null, messageMock, args);
    expect(messageMock.reply).toHaveBeenCalledTimes(1);
    expect(messageMock.reply).toHaveBeenCalledWith(expectedOutput);
  });

  test('Hora Mal', () => {
    const args = ['10:2', '10/12/2022', 'hola'];
    const expectedOutput = 'la hora no ha sido introducida correctamente, use el formato HH:MM';
    reminder.run(null, messageMock, args);
    expect(messageMock.reply).toHaveBeenCalledTimes(1);
    expect(messageMock.reply).toHaveBeenCalledWith(expectedOutput);
  });

  test('Fecha Mal', () => {
    const args = ['10:20', '10/12/20', 'hola'];
    const expectedOutput = 'la fecha no ha sido introducida correctamente, use el formato DD/MM/AAAA';
    reminder.run(null, messageMock, args);
    expect(messageMock.reply).toHaveBeenCalledTimes(1);
    expect(messageMock.reply).toHaveBeenCalledWith(expectedOutput);
  });
});