const productBase = '/api/Produtos/{id}';
const sellersBase = '/api/Lojas';
const attributesBase = '/api/Atributos';

export const environment = {
  production: true,
  api: {
    basePath: 'http://104.41.43.248:8080',
    basePathLogin: 'http://104.41.43.248:8081',
    version: '',
    protocol: '',
    domains: {
      auth: {
        login: '/api/Security/Login',
        logout: '',
      },
      products: {
        all: '',
        search: '/api/Produtos/Pesquisa',
        byId: productBase,
        addProduct: '/api/Produtos',
        editProduct: productBase,
        deleteProduct: productBase,
        priceRange: '/api/Filtros/FaixaPrecos',
      },
      sellers: {
        all: sellersBase,
        byId: `${sellersBase}/{id}`,
        addSeller: sellersBase,
        editSellerAvailability: `${sellersBase}/{id}`,
        deleterSeller: `${sellersBase}/{id}`,
      },
      attributes: {
        getAttributes: attributesBase,
        editAttributes: `${attributesBase}/{chave}/{valor}`,
        deleteAttributes: `${attributesBase}/{chave}/{valor}`,
        types: {
          getTypes: `${attributesBase}/Tipos`,
          getTypesByName: `${attributesBase}/Tipos/{nome}`,
          editTypesByName: `${attributesBase}/Tipos/{nome}`,
          deleteTypesByName: `${attributesBase}/Tipos/{nome}`,
        }
      },
      user: {
        financing: '',
      },
    },
  },
};
