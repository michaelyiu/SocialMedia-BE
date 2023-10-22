import keysDev from './keys_dev.js';
import keysProd from './keys_prod.js';

// Determine which configuration to export based on NODE_ENV
let keys;

if (process.env.NODE_ENV === 'production') {
  keys = keysProd;
} else {
  keys = keysDev;
}
console.log(keys)
export default keys;