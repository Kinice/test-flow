import { b } from './test';
const a: string = 'abcd';
export default {
  fetch: () => {
    return new Response('Hello, world!' + a + b);
  }
}