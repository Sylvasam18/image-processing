import newImage from '../resizer';

it('expect newImage() to return a value', async () => {
  const name = 'John';
  const width = parseInt('3000');
  const height = parseInt('2500');
  const result = await newImage(name, width, height);
  expect(result).toBeTruthy();
});
