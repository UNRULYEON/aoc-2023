import { createDay } from "./utils/index.ts";

let day = Deno.args[0];
let part = Deno.args[1];

if (Deno.args[0] === "--new-day") {
  const newDay = Deno.args[1] || prompt("Create day:");

  createDay(Number(newDay));
} else {
  if (!day) {
    const promptDay = prompt("Day:");
    if (promptDay === null) Deno.exit(0);

    day = promptDay;
  }

  if (!part) {
    const promptPart = prompt("Part:");
    if (promptPart === null) Deno.exit(0);

    part = promptPart;
  }

  try {
    const module = await import(`./days/${day}/part${part}.ts`);

    console.log(module.default());
  } catch (e) {
    console.error(e);
  }
}
