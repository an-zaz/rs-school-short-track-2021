/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arr = [...names];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) < i) {
      let count = 1;
      let newFileName = `${arr[i]}(${count})`;
      while (arr.indexOf(newFileName) < i && arr.indexOf(newFileName) !== -1) {
        count++;
        newFileName = `${arr[i]}(${count})`;
      }
      arr[i] = newFileName;
    }
  }
  return arr;
}
module.exports = renameFiles;
