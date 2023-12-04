import { getDayInput } from "../../utils/index.ts";

const regex = /(?=(one|two|three|four|five|six|seven|eight|nine))/g;
const numbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const program = (input?: string) => {
  const lines = (input || getDayInput(1, 2)).split("\n").filter((line) => line);

  const value = lines
    .map((line) => {
      const result: { number: string; index: number }[] = [];

      line.split("").forEach((char, i) => {
        if (!isNaN(parseInt(char))) result.push({ number: char, index: i });
      });

      Array.from(line.matchAll(regex)).forEach((match) => {
        const number = numbers.findIndex((n) => n === match[1]) + 1;

        result.push({ number: String(number), index: match.index as number });
      });

      result.sort((a, b) => a.index - b.index);

      return result.reduce<string[]>((prev, curr) => {
        return [...prev, curr.number];
      }, []);
    })
    .reduce<number[]>((prev, curr) => {
      let result = 0;

      if (curr.length === 2) {
        result = Number(curr.reduce<string>((p, c) => p + c, ""));
      } else if (curr.length === 1) {
        result = Number((curr[0] as string) + (curr[0] as string));
      } else {
        result = Number(
          (curr[0] as string) + (curr[curr.length - 1] as string)
        );
      }

      return [...prev, result];
    }, [])
    .reduce<number>((prev, curr) => prev + curr, 0);

  return value;
};

export default program;
