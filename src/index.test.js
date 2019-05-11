const spellNumber = require('./index');
const digits = require('./utils/translations').digits;

describe('Digits from 0 to 9', function() {
  for (let i = 0; i < digits.length; i++) {
    it('correctly spells digit ' + i, function() {
      const spelling = spellNumber(i);
      expect(spelling).toEqual(digits[i]);
    });
  }
  it('correctly spells negative digits', function() {
    const negativeOne = spellNumber(-1);
    expect(negativeOne).toEqual('mənfi bir');
    const negativeFive = spellNumber(-5);
    expect(negativeFive).toEqual('mənfi beş');
  });
});

describe('Numbers from 10 to 100', function() {
  it('correctly spells numbers from 10 to 100', function() {
    const eleven = spellNumber(11);
    expect(eleven).toEqual('on bir');
    const twentyThree = spellNumber(23);
    expect(twentyThree).toEqual('iyirmi üç');
    const nintyNine = spellNumber(99);
    expect(nintyNine).toEqual('doxsan doqquz');
    const eightySix = spellNumber(86);
    expect(eightySix).toEqual('səksən altı');
    const sixtyNine = spellNumber(69);
    expect(sixtyNine).toEqual('altmış doqquz');
    const thirtyOne = spellNumber(31);
    expect(thirtyOne).toEqual('otuz bir');
    const negativeThirtyOne = spellNumber(-31);
    expect(negativeThirtyOne).toEqual('mənfi otuz bir');
  });
});

describe('Numbers from 100 to 1000', function() {
  it('correctly spells numbers from 100 to 1000', function() {
    const hundredAndOne = spellNumber(101);
    expect(hundredAndOne).toEqual('yüz bir');
    const nineHundredNintyNine = spellNumber(999);
    expect(nineHundredNintyNine).toEqual('doqquz yüz doxsan doqquz');
    const negativeSevenHundredThirtyEight = spellNumber(-738);
    expect(negativeSevenHundredThirtyEight).toEqual(
      'mənfi yeddi yüz otuz səkkiz'
    );
  });
});
