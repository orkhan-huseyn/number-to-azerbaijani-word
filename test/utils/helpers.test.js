/*eslint-disable*/
import { isInteger } from '../../src/utils/helpers';

describe('isInteger function', function() {
  it('correctly defines if number is integer or not', function() {
    expect(isInteger(12)).toEqual(true);
    expect(isInteger(1.5)).toEqual(false);
    expect(isInteger(Math.PI)).toEqual(false);
    expect(isInteger(886 * 1234)).toEqual(true);
  });
});
