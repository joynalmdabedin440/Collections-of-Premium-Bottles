const getStoreCart = () => {
    const storeCartString=localStorage.getItem('cart')
    if (storeCartString) {
        return JSON.parse(storeCartString)
    }
    return []
}
const saveToLocalStorage = (cart) => {
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringified)
}
const addToLocalStorage = (id) => {
    const cart = getStoreCart()
    cart.push(id)
    saveToLocalStorage(cart)
}

export {addToLocalStorage,getStoreCart}