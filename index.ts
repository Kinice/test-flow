import { b } from './test';
const a: string = 'addcdsd';
export default {
  fetch: () => {
    return new Response('Hello, world!' + a + b);
  }
}