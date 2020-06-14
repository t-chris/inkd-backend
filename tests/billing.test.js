import { calculateCost } from "../libraries/calculateCost";

test("low", () => {
  const storage = 10;
  const cost = 4000;
  const expectedCost = calculateCost(storage);

  expect(cost).toEqual(expectedCost);
});

test("mid", () => {
  const storage = 100;
  const cost = 20000;
  const expectedCost = calculateCost(storage);

  expect(cost).toEqual(expectedCost);
});

test("high", () => {
  const storage = 101;
  const cost = 10100;
  const expectedCost = calculateCost(storage);

  expect(cost).toEqual(expectedCost);
});