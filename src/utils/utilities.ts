export const slugify = (slug: string): string =>
  slug.replace(/\s/g, "-").toLowerCase();

export function getComponentKey(name: string, index: number): string {
  return `${slugify(name)}-${index}`;
}
