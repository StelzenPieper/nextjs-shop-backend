import { useState } from "react";
import useSWR from "swr";
import ProductCard from "./ProductCard";

export default function ProductCardGrid() {
  const { data, error } = useSWR("/api/products");
  const [filterParam, setFilterParam] = useState("");

  const filtered = data.filter((product) => {
    return product.category === filterParam;
  });

  console.log(filtered);

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <>
      <select
        onChange={(event) => {
          console.log(filterParam);
          setFilterParam(event.target.value);
        }}
      >
        <option>All</option>
        {data.map((filterItem) => (
          <option key={filterItem.id}>{filterItem.category}</option>
        ))}
      </select>

      {filtered.map((product) => (
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
