import { helper } from '@ember/component/helper';

export default helper(function tofixed([n]) {
  if (typeof n === 'number') return n.toFixed(2);
  return '';
});
