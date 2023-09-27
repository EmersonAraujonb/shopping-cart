
const FecthProducts = async (query) => {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}&offset=0`);
    const data = await response.json();
     return data.results;
}

export default FecthProducts;
