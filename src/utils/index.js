/**
 * This function calculates total price of an order new
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} Total Price
 */
export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)
    return sum
}