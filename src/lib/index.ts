/**
 * MIT License
 * Copyright (c) 2023 Yan
 */

export function isString(n: unknown) {
  return typeof n === "string" || n instanceof String;
}

export function formatImageName(index: number) {
  return index < 10 ? `0${index}` : `${index}`;
}

export function capitalizeFirstLetter(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
