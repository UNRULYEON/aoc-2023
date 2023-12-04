import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import part1 from "./part1.ts";
import part2 from "./part2.ts";

const controlPart1 = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

const controlPart2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

Deno.test("Day 1", { permissions: { read: true } }, async (t) => {
  await t.step("Part 1", async (t) => {
    await t.step("Control", () => {
      const result = part1(controlPart1);

      assertEquals(result, 142);
    });

    await t.step("Puzzle", () => {
      const result = part1();

      assertEquals(result, 57346);
    });
  });

  await t.step("Part 2", async (t) => {
    await t.step("Control", () => {
      const result = part2(controlPart2);

      assertEquals(result, 281);
    });

    await t.step("Puzzle", () => {
      const result = part2();

      assertEquals(result, 57345);
    });
  });
});
