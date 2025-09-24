import { b } from './test';
const a: string = 'abc';
export default {
  fetch: () => {
    return new Response('Hello, world!' + a + b);
  }
}