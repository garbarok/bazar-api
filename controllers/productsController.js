const { parseXMLFile } = require('../lib/xmlParser');
const pluralize = require('pluralize');

exports.getProducts = (req, res) => {
  const searchQuery = req.query.search; // Cambia 'search' por el nombre de parámetro que prefieras

  parseXMLFile('./data/stock.xml')
    .then(products => {
      let filteredProducts = products;
      if (searchQuery) {
        const search = searchQuery.toLowerCase();
        filteredProducts = filteredProducts.filter(product => {
          return Object.values(product).some(value => {
            return typeof value === 'string' && value.toLowerCase().includes(search);
          });
        });
      }
      if (filteredProducts.length === 0) {
        return res.json([]);
      }
      res.json(filteredProducts);
    })
    .catch(error => {
      res.status(500).send('Internal Error. Please try again later.');
    });
};
