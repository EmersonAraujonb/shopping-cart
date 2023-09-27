
const FecthCategories = async (query) => {
    const response = await fetch(` https://api.mercadolibre.com/sites/MLB/search?category=${query}`);
    const data = await response.json();
     return data.results;
}

export default FecthCategories;
