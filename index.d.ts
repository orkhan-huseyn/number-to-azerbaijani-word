interface SpellFunctionType {
  (input: number): string;
}

interface NumberToAzWord {
  spellNumberInAz: SpellFunctionType;
}

declare const numberToAzWord: NumberToAzWord;

export default numberToAzWord
