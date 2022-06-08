import { describe, expect, test } from "vitest"

import { DotaPatchType, DotaVersion } from "./index"

describe("parse", () => {
  const cases: Array<[input: string, expected: DotaVersion]> = [
    ["6.21", new DotaVersion(6, 21, 0)],
    ["7.0", new DotaVersion(7, 0, 0)],
    ["7.00", new DotaVersion(7, 0, 0)],
    ["7.1", new DotaVersion(7, 1, 0)],
    ["7.10", new DotaVersion(7, 10, 0)],
    ["7.951", new DotaVersion(7, 951, 0)],
    ["2.345", new DotaVersion(2, 345, 0)],
    ["7.36a", new DotaVersion(7, 36, 1)],
    ["7.36b", new DotaVersion(7, 36, 2)],
    ["7.36g", new DotaVersion(7, 36, 7)],
  ]

  test.each(cases)("parses '%s' correctly", (input, expected) => {
    expect(DotaVersion.parse(input)).toEqual(expected)
  })

  test("fails on bad input", () => {
    expect(() => DotaVersion.parse("1337")).toThrow("Got invalid DotaVersion")
  })
})

describe("type", () => {
  const cases: Array<[input: DotaVersion, expected: DotaPatchType]> = [
    [new DotaVersion(7, 0, 0), DotaPatchType.Major],
    [new DotaVersion(7, 10, 0), DotaPatchType.Minor],
    [new DotaVersion(7, 10, 1), DotaPatchType.Patch],
  ]

  test.each(cases)("is correct %#", (input, expected) => {
    expect(input.type).toEqual(expected)
  })
})

describe("toNumber", () => {
  const cases: Array<[input: DotaVersion, expected: number]> = [
    /* eslint-disable unicorn/numeric-separators-style */
    [new DotaVersion(7, 0, 1), 70001],
    [new DotaVersion(7, 10, 0), 71000],
    [new DotaVersion(7, 10, 1), 71001],
  ]

  test.each(cases)("%j outputs %s", (input, expected) => {
    expect(input.toNumber()).toEqual(expected)
  })
})

describe("toString", () => {
  const cases: Array<[expected: DotaVersion, input: string]> = [
    [new DotaVersion(6, 21, 0), "6.21"],
    [new DotaVersion(7, 0, 0), "7.00"],
    [new DotaVersion(7, 0, 0), "7.00"],
    [new DotaVersion(7, 1, 0), "7.01"],
    [new DotaVersion(7, 10, 0), "7.10"],
    [new DotaVersion(7, 951, 0), "7.951"],
    [new DotaVersion(2, 345, 0), "2.345"],
    [new DotaVersion(7, 36, 1), "7.36a"],
    [new DotaVersion(7, 36, 2), "7.36b"],
    [new DotaVersion(7, 36, 7), "7.36g"],
  ]

  test.each(cases)("%j outputs %s", (input, expected) => {
    expect(input.toString()).toEqual(expected)
  })
})
