import { b } from './test';
const a: string = 'adcd';
export default {
  fetch: () => {
    return new Response('Hello, world!' + a + b);
  }
}