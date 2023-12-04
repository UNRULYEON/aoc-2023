export const getDayInput = (day: number, part: number) =>
  Deno.readTextFileSync(`days/${day}/part${part}.txt`);

function template(strings: TemplateStringsArray, ...keys: string[]) {
  return (...values: unknown[]) => {
    const dict = values[values.length - 1] || {};
    const result = [strings[0]];
    keys.forEach((key, i) => {
      // @ts-ignore: idk
      const value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join("");
  };
}

const program = template`import { getDayInput } from "../../utils/index.ts";

const program = (input?: string) => {
  const lines = (input || getDayInput(${0 as unknown as string}, ${
  1 as unknown as string
})).split("\\n").filter((line) => line);

  const value = "";

  return value;
};

export default program;
`;

const test = template`import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import part1 from "./part1.ts";
import part2 from "./part2.ts";

const controlPart1 = \`\`;

const controlPart2 = \`\`;

Deno.test("Day ${
  0 as unknown as string
}", { permissions: { read: true } }, async (t) => {
  await t.step("Part 1", async (t) => {
    await t.step("Control", () => {
      const result = part1(controlPart1);

      assertEquals(result, "");
    });

    await t.step("Puzzle", () => {
      const result = part1();

      assertEquals(result, "");
    });
  });

  await t.step("Part 2", async (t) => {
    await t.step("Control", () => {
      const result = part2(controlPart2);

      assertEquals(result, "");
    });

    await t.step("Puzzle", () => {
      const result = part2();

      assertEquals(result, "");
    });
  });
});
`;

export const createDay = (day: number) => {
  try {
    Deno.mkdirSync(`./days/${day}`);
    Deno.createSync(`./days/${day}/index.test.ts`);
    Deno.writeTextFileSync(`./days/${day}/index.test.ts`, test(day));
    Deno.createSync(`./days/${day}/part1.ts`);
    Deno.writeTextFileSync(`./days/${day}/part1.ts`, program(day, 1));
    Deno.createSync(`./days/${day}/part2.ts`);
    Deno.writeTextFileSync(`./days/${day}/part2.ts`, program(day, 2));
    Deno.createSync(`./days/${day}/part1.txt`);
    Deno.createSync(`./days/${day}/part2.txt`);
  } catch (e) {
    console.error(e.message);
  }
};
