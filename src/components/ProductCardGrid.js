import useSWR from "swr";
import ProductCard from "./ProductCard";

export default function ProductCardGrid() {
  const { data, error } = useSWR("/api/products");

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <>
      {data.map((product) => (
        <div key={product.id}>
          <ProductCard
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            category={product.category}
            tags={product.tags}
          />
        </div>
      ))}
    </>
  );
}
