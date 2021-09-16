var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return function (n) {
    let l = 1;
    let r = n;
    let p = undefined;
    while (l < r) {
      p = Math.floor((l + r) / 2);
      if (!isBadVersion(p)) {
        l = p + 1;
      } else {
        r = p;
      }
    }
    return l;
  };
};
