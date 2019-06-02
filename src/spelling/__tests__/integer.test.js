/*eslint-disable*/
const spellInteger = require('../integer');

describe('Digits from 0 to 9', function() {
  it('correctly spells negative digits', function() {
    const negativeOne = spellInteger(-1);
    expect(negativeOne).toEqual('mənfi bir');
    const negativeFive = spellInteger(-5);
    expect(negativeFive).toEqual('mənfi beş');
  });
});

describe('Numbers from 10 to 100', function() {
  it('correctly spells numbers from 10 to 100', function() {
    const eleven = spellInteger(11);
    expect(eleven).toEqual('on bir');
    const twentyThree = spellInteger(23);
    expect(twentyThree).toEqual('iyirmi üç');
    const nintyNine = spellInteger(99);
    expect(nintyNine).toEqual('doxsan doqquz');
    const eightySix = spellInteger(86);
    expect(eightySix).toEqual('səksən altı');
    const sixtyNine = spellInteger(69);
    expect(sixtyNine).toEqual('altmış doqquz');
    const thirtyOne = spellInteger(31);
    expect(thirtyOne).toEqual('otuz bir');
    const negativeThirtyOne = spellInteger(-31);
    expect(negativeThirtyOne).toEqual('mənfi otuz bir');
  });
});

describe('Numbers from 100 to 1000', function() {
  it('correctly spells numbers from 100 to 1000', function() {
    const hundredAndOne = spellInteger(101);
    expect(hundredAndOne).toEqual('yüz bir');
    const nineHundredNintyNine = spellInteger(999);
    expect(nineHundredNintyNine).toEqual('doqquz yüz doxsan doqquz');
    const negativeSevenHundredThirtyEight = spellInteger(-738);
    expect(negativeSevenHundredThirtyEight).toEqual(
      'mənfi yeddi yüz otuz səkkiz'
    );
  });
});

describe('Numbers from 1000 to 1000000', function() {
  it('correctly spells numbers from 1000 to 1000000', function() {
    const thousandAndOne = spellInteger(1001);
    expect(thousandAndOne).toEqual('min bir');
    const thousandAndHundrenThirty = spellInteger(1130);
    expect(thousandAndHundrenThirty).toEqual('min yüz otuz');
    const threeThousandFiveHundredSix = spellInteger(3506);
    expect(threeThousandFiveHundredSix).toEqual('üç min beş yüz altı');
    const negativeEightThousandThreeHundredAndThirtyOne = spellInteger(-80331);
    expect(negativeEightThousandThreeHundredAndThirtyOne).toEqual(
      'mənfi səksən min üç yüz otuz bir'
    );
    const bunchOfNines = spellInteger(990999);
    expect(bunchOfNines).toEqual(
      'doqquz yüz doxsan min doqquz yüz doxsan doqquz'
    );
  });
});

describe('Numbers from Million to Billion', function() {
  it('correctly spells numbers from 1 million to 1 billion', function() {
    const millionOne = spellInteger(1000001);
    expect(millionOne).toEqual('bir milyon bir');
    const possibilitiesInAvengersInfinityWar = spellInteger(14000605);
    expect(possibilitiesInAvengersInfinityWar).toEqual(
      'on dörd milyon altı yüz beş'
    );
    const randomNumber = spellInteger(-1234567);
    expect(randomNumber).toEqual(
      'mənfi bir milyon iki yüz otuz dörd min beş yüz altmış yeddi'
    );
  });

  it('correctly spells one billion', function() {
    const billion = spellInteger(1e9);
    expect(billion).toEqual('bir milyard');
  });
});
