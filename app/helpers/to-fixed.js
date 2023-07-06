import { helper } from '@ember/component/helper';

export default helper(function tofixed([n]) {
  return n.toFixed(2);
});
