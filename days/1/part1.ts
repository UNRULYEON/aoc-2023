import { getDayInput } from "../../utils/index.ts";

const program = (input?: string) => {
  const lines = (input || getDayInput(1, 1)).split("\n").filter((line) => line);

  const value = lines
    .map((line) => {
      return line
        .split("")
        .map((char) => {
          const isNumber = !isNaN(parseInt(char));

          if (isNumber) return char;
        })
        .filter((line) => line);
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
