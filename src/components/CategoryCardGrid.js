import useSWR from "swr";
import CategoryCard from "./CategoryCard";

export default function CategoryCardGrid() {
  const { data, error } = useSWR("/api/categories");

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <>
      {data.map((category) => (
        <div key={category.id}>
          <CategoryCard
            id={category.id}
            name={category.name}
            description={category.description}
          />
        </div>
      ))}
    </>
  );
}
