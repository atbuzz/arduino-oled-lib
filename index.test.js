const { five, board } = require('./index');

test('checks if five exists.', () => {
  expect(five).toBeDefined();
});

test('checks if board exists.', () => {
  expect(board).toBeDefined();
});
