import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { getProducts } from "../utils/shopify";
import Header from "../components/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Nextjs Shopify</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className={styles.products}>
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </main>
    </>
  );
}
export const getServerSideProps = async () => {
  const products = await getProducts();
  return {
    props: { products }, // will be passed to the page component as props
  };
};
