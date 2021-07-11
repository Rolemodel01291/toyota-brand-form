export const removeTrailingAndLeadingSlash = (string) =>
  string.replace(/^\/|\/$/g, '');
