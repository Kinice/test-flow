import { b } from './test';
const a: string = 'addcd';
export default {
  fetch: () => {
    return new Response('Hello, world!' + a + b);
  }
}