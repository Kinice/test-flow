import { b } from './test';
const a: string = 'abcd';
console.log(a + b);
export default {
  fetch: () => {
    return new Response('Hello, world!');
  }
}