/**
 * Returns a permalink given a recipe title.
 * @param title: string
 * @returns string
 * TODO: figure out why react is throwing an error when this is imported.
 */
export function getRecipePermalink(title: string): string {
  return title.replace(" ", "-").toLowerCase();
}