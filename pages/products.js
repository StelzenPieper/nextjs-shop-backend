import { SWRConfig } from "swr";
import { getProducts } from "../src/services/get-products";
import swrFetcher from "../src/lib/swr-fetcher";
import ProductCardGrid from "../src/components/ProductCardGrid";
import ProductModal from "../src/components/NewProductModal";
import { useState } from "react";
import { OpenModalButton } from "../src/components/Buttons.styled";

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: {
      fallback: {
        "/api/products": products,
      },
    },
  };
}

export default function ProductCards({ fallback }) {
  const [show, setShow] = useState(false);

  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <OpenModalButton onClick={() => setShow(true)}>Add</OpenModalButton>
      <ProductModal onClose={() => setShow(false)} show={show} />
      <ProductCardGrid />
    </SWRConfig>
  );
}
