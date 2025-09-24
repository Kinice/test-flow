import { b } from './test';
const a: string = 'ac';
export default {
  fetch: () => {
    return new Response('Hello, world!' + a + b);
  }
}