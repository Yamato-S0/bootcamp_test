import {countWord} from "@/count_word";

describe("countWord", () => {
  test("should return -1 when text is empty", () => {
    const text = "";
    const targetWord = "foo";

    const actual = countWord(text, targetWord);

    expect(actual).toBe(-1);
  });

  test("should return -1 when targetWord is empty", () => {
    const text = "foo";
    const targetWord = "";

    const actual = countWord(text, targetWord);

    expect(actual).toBe(-1);
  });

  test("should return -1 when text and targetWord are empty", () => {
    const text = "";
    const targetWord = "";

    const actual = countWord(text, targetWord);

    expect(actual).toBe(-1);
  });

  test("should return 0 when text and targetWord are not matched", () => {
    const text = "foo";
    const targetWord = "bar";

    const actual = countWord(text, targetWord);

    expect(actual).toBe(0);
  });

  test("should return 1 when text and targetWord are matched", () => {
    const text = "foo";
    const targetWord = "foo";

    const actual = countWord(text, targetWord);

    expect(actual).toBe(1);
  });

  test("should return 2 when text and targetWord are matched", () => {
    const text = "foo foo";
    const targetWord = "foo";

    const actual = countWord(text, targetWord);

    expect(actual).toBe(2);
  });
});
