/**
 * @module utils
 *
 * Some helpers functions
 */

/**
 * @function capitalise
 * @param  {string} string
 * @return {string}
 */
export function capitalise (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * `fetch` will only reject on network failure or
 * if anything prevented the request from completing.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch}
 *
 * @function handleError
 * @param  {Response} res
 * @return {Object}
 */
export const handleError = (res) => {
  if (res.ok) return res.json()
  throw new Error(`Network Error: ${res.statusText}`)
}

/**
 * Format a string date in the user browser locale
 *
 * @function formatDate
 * @param  {string} dateString compliant with RFC 2822
 * @return {string}
 */
export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString()
}
