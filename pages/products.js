import { SWRConfig } from "swr";
import { getProducts } from "../src/services/get-products";
import swrFetcher from "../src/lib/swr-fetcher";
import ProductCardGrid from "../src/components/ProductCardGrid";

export function getStaticProps() {
  const products = getProducts();

  return {
    props: {
      fallback: {
        "/api/products": products,
      },
    },
  };
}

export default function ProductCards({ fallback }) {
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <ProductCardGrid />
    </SWRConfig>
  );
}
