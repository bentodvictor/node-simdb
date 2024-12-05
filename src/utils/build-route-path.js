/**
 * Match and extract both route parameters and query parameters from a URL.
 * @param {string} path
 * @returns the constructed regular expression pattern
 *
 * example:
 *   const path = "/users/:id/posts/:postId";
 *   const url = "/users/john_doe/posts/123?page=2&sort=desc";
 *   const pathRegex = buildRoutePath(path);
 *   const match = url.match(pathRegex);
 *
 *   if (match) {
 *     const { id, postId, query } = match.groups;
 *     console.log(id); // Output: "john_doe"
 *     console.log(postId); // Output: "123"
 *     console.log(query); // Output: "?page=2&sort=desc"
 *   }
 */
export function buildRoutePath(path) {
  // regex to get the names ":anything_here"
  const routeParametersRegex = /:([a-zA-Z]+)/g;

  // Create groups based on routeParametersRegex, could be id, name, page, etc.
  const pathWithParams = path.replaceAll(
    routeParametersRegex,
    "(?<$1>[a-z0-9-_]+)"
  );

  // Create a optional group for query parameters and garantee that (if exists) will be the last one
  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`);

  return pathRegex;
}
