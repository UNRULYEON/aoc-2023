# aoc-2023

[Advent of code 2023](https://adventofcode.com/)

## Creating a new day

```bash
deno run --allow-read --allow-write main.ts --new-day

# With a day specified
deno run --allow-read --allow-write main.ts --new-day 2
```

## Getting the result

```bash
deno run --allow-read main.ts

# with a day and part specified
deno run --allow-read main.ts 2 1

# or in watch mode 
deno run --watch --allow-read main.ts 2 1
```

## Running tests

```bash
deno test --allow-read

# or in watch mode
deno test --watch --allow-read
```

