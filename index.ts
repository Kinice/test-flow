import { b } from './test';
const a: string = 'addcdsdccc';
export default {
  fetch: () => {
    return new Response('Hello, world!' + a + b);
  }
}