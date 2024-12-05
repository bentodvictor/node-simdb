/**
 * Function responsible for "destructure" the query parameters into a object
 * @param {string} query
 * @returns object with the informations about the query parameters
 */
export function extractQueryParams(query) {
  return query
    .substr(1)
    .split("&")
    .reduce((queryParams, param) => {
      const [key, value] = param.split("=");

      queryParams[key] = value;

      return queryParams;
    }, {});
}
