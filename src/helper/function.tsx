const summaryTitle = (title: String) => {
  const text = title.split(' ').slice(0, 2).toString().replace(',', '');

  return text;
};

const filterProducts = (products: object[], search = {}) => {
  console.log('serch', search);

  let newProducts = products;
  //@ts-ignore
  if (search.searchText) {
    newProducts = products.filter((product: object) =>
      //@ts-ignore
      summaryTitle(product.title)
        .trim()
        .toLowerCase()
        //@ts-ignore
        .includes(search.searchText)
    );
  }
  //@ts-ignore
  if (search.query && search.query !== 'All') {
    //@ts-ignore
    newProducts = newProducts.filter(
      (product: object) =>
        //@ts-ignore
        product.category.trim().toLowerCase() == search.query.toLowerCase()
    );

    console.log('new', newProducts);
  }
  //@ts-ignore
  if (!search.searchText && !search.query) {
    newProducts = products;
  }

  return newProducts;
};

const showquantity = (state: any, id: any) => {
  const indexed = state.selectedProduct.findIndex((item: any) => item.id == id);
  if (indexed != -1) {
    return state.selectedProduct[indexed].quantity;
  }
  return 0;
};

const sumPrices = (state: any) => {
  return state.reduce(
    (acc: any, cur: any) => acc + cur.quantity * cur.price,
    0
  );
};

export { summaryTitle, filterProducts, showquantity, sumPrices };
