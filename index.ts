import { b } from './test';
const a: string = 'abc';
console.log(a + b);
export default {
  fetch: () => {
    return new Response('Hello, world!');
  }
}