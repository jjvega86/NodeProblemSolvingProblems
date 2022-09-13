/**
 * Receive an integer
 * Convert integer to bits
 * Flip each bit to its opposite (0 -> 1, 1 -> 0)
 * Convert back to unsigned integer and return
 * @param {number} n integer
 * @returns {number} unsigned integer
 */
function flippingBits(n) {
  return 4294967295 - n;
}

module.exports = flippingBits;
