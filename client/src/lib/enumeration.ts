export const mapObjectArr = (obj: any[], func: (...args: any[]) => any) =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [...func(v)]));
