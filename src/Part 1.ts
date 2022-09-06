/**
 *
 * [
 *  {name: "main"},
 *  {name: "deleteDevice"}
 * ]
 *
 * =>
 *
 * "main" | "deleteDevice"
 *
 */

const arr = [{ name: "main" }, { name: "deleteDevice" }] as const;

type unionValueTypes<
  T extends readonly any[],
  K extends keyof T[number]
> = T[number][K];

// -- test --
type IValue = unionValueTypes<typeof arr, "name">;

export default {};
