import {isValidDate} from "@/is_valid_date";

describe("isValidDate", () => {
  test("should return false when year is invalid", () => {
    const year = 0;
    const month = 2;
    const day = 1;

    const actual = isValidDate(year, month, day);

    expect(actual).toBe(false);
  });

  test("should return false when month is invalid", () => {
    const year = 2020;
    const month = 0;
    const day = 1;

    const actual = isValidDate(year, month, day);

    expect(actual).toBe(false);
  });

  test("should return false when day is invalid", () => {
    const year = 2020;
    const month = 2;
    const day = 0;

    const actual = isValidDate(year, month, day);

    expect(actual).toBe(false);
  });

  test("should return false when date is invalid", () => {
    const year = 2020;
    const month = 2;
    const day = 30;

    const actual = isValidDate(year, month, day);

    expect(actual).toBe(false);
  });

  test("should return true when date is valid", () => {
    const year = 2020;
    const month = 2;
    const day = 1;

    const actual = isValidDate(year, month, day);

    expect(actual).toBe(true);
  });

  test("should return true when date is valid", () => {
    const year = 2020;
    const month = 2;
    const day = 29;

    const actual = isValidDate(year, month, day);

    expect(actual).toBe(true);
  });
});
