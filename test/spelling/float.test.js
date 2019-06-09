/*eslint-disable*/
import spellFloat from '../../src/spelling/float';

describe('Spelling floats', function() {
  it('correctly spells floating point numbers', function() {
    const PI = spellFloat(3.14);
    expect(PI).toEqual('üç tam yüzdə on dörd');

    const randomNum = spellFloat(69.31);
    expect(randomNum).toEqual('altmış doqquz tam yüzdə otuz bir');

    const thousands = spellFloat(123.456);
    expect(thousands).toEqual('yüz iyirmi üç tam mində dörd yüz əlli altı');

    const tenThousands = spellFloat(1234.5678);
    expect(tenThousands).toEqual(
      'min iki yüz otuz dörd tam on mində beş min altı yüz yetmiş səkkiz'
    );

    const hundredThousands = spellFloat(1234.56789);
    expect(hundredThousands).toEqual(
      'min iki yüz otuz dörd tam yüz mində əlli altı min yeddi yüz səksən doqquz'
    );

    const millions = spellFloat(10.567891);
    expect(millions).toEqual(
      'on tam milyonda beş yüz altmış yeddi min səkkiz yüz doxsan bir'
    );

    const tenMillions = spellFloat(10.5678912);
    expect(tenMillions).toEqual(
      'on tam on milyonda beş milyon altı yüz yetmiş səkkiz min doqquz yüz on iki'
    );

    const hundredMillions = spellFloat(10.56789123);
    expect(hundredMillions).toEqual(
      'on tam yüz milyonda əlli altı milyon yeddi yüz səksən doqquz min yüz iyirmi üç'
    );

    const billions = spellFloat(10.567891234);
    expect(billions).toEqual(
      'on tam milyardda beş yüz altmış yeddi milyon səkkiz yüz doxsan bir min iki yüz otuz dörd'
    );
  });
});
