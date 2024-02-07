import { useEffect, useState } from 'react';
import { useProducts } from '../context/products.context';
import Card from '../module/Card';
import styles from './Home.module.css';
import { filterProducts } from '../helper/function';
import { useSearchParams } from 'react-router-dom';
import { AiOutlineAlignRight } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    search: '',
    category: '',
  });
  const { products }: any = useProducts();
  const [open, setOpen] = useState(false);
  const [newProducts, setNewProducts] = useState<object[]>([]);
  const [search, setSearch] = useState<
    string | number | readonly string[] | undefined
  >('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    setNewProducts(products);
    if (searchParams.get('search') || searchParams.get('category')) {
      const search = searchParams.get('search') || '';
      const query = searchParams.get('category') || '';
      //@ts-ignore
      setSearch(search);
      //@ts-ignore
      const newProducts = filterProducts(products, {
        searchText: search,
        query,
      });
      console.log(newProducts);

      setNewProducts(newProducts);
    }
  }, [products]);

  useEffect(() => {
    if (!search) {
      setSearchParams({ category });
    }
    if (category == 'All') {
      if (search) {
        //@ts-ignore
        setSearchParams({ search });
      } else {
        setSearchParams({});
      }
    }
  }, [newProducts]);

  const searchHandler = () => {
    const query = searchParams.get('category') || '';
    const newProducts = filterProducts(products, { searchText: search, query });
    setNewProducts(newProducts);
    //@ts-ignore
    setSearchParams((item) => ({ ...item, search, category }));
  };

  const categoryHandler = (e: any) => {
    const search = searchParams.get('search') || '';
    const categoryselect = e.target.innerText;
    setCategory(categoryselect);
    const newProducts = filterProducts(products, {
      query: categoryselect,
      searchText: search,
    });

    setNewProducts(newProducts);
    setSearchParams((item) => ({
      ...item,
      category: categoryselect,
      search,
    }));
  };

  const openHandler = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <div className={styles.search}>
        <input
          placeholder='Search...'
          value={search}
          onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
        />
        <button onClick={searchHandler}>Search</button>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          {newProducts.map((product: any) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div className={styles.sidebar}>
          <div className={styles.mobileSidebar}>
            {open ? (
              <div onClick={openHandler}>
                <IoClose />
              </div>
            ) : (
              <div onClick={openHandler}>
                <AiOutlineAlignRight />
              </div>
            )}
          </div>
          <ul
            onClick={categoryHandler}
            className={styles.sidebarDetail}
            style={{ display: open ? 'block' : ' ' }}
          >
            <li
              //@ts-ignore
              className={category == 'All' && styles.selected}
            >
              All
            </li>
            <li
              //@ts-ignore
              className={category == "men's clothing" && styles.selected}
            >
              men's clothing
            </li>
            <li
              //@ts-ignore
              className={category == 'jewelery' && styles.selected}
            >
              jewelery
            </li>
            <li
              //@ts-ignore
              className={category == 'electronics' && styles.selected}
            >
              electronics
            </li>
            <li
              //@ts-ignore
              className={category == "women's clothing" && styles.selected}
            >
              women's clothing
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
