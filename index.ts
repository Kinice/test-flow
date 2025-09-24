import { b } from './test';
const a: string = 'adc';
export default {
  fetch: () => {
    return new Response('Hello, world!' + a + b);
  }
}