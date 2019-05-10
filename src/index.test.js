const spellNumber = require("./index");
const digits = require("./utils/translations").digits;

describe("Digits from 0 to 9", function() {
  for (let i = 0; i < digits.length; i++) {
    it("correctly spells digit " + i, function() {
      const spelling = spellNumber(i);
      expect(spelling).toEqual(digits[i]);
    });
  }
});

describe("Numbers from 10 to 100", function() {
  it("correctly spells numbers from 10 to 100", function() {
    const eleven = spellNumber(11);
    expect(eleven).toEqual("on bir");
    const twentyThree = spellNumber(23);
    expect(twentyThree).toEqual("iyirmi üç");
    const nintyNine = spellNumber(99);
    expect(nintyNine).toEqual("doxsan doqquz");
    const eightySix = spellNumber(86);
    expect(eightySix).toEqual("səksən altı");
  });
});
