export default arrayify;
// Here's where you'll write arrayify. Look at
// `api/src/routes/utils/arrayify.js` for instructions.

function arrayify(object = []) {
  if (Array.isArray(object)) {
    return object;
  } else {
    return [object];
  }
}
