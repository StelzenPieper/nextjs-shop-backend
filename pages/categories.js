import { SWRConfig } from "swr";
import { getCategories } from "../src/services/get-categories";
import swrFetcher from "../src/lib/swr-fetcher";
import CategoryCardGrid from "../src/components/CategoryCardGrid";

export function getStaticProps() {
  const categories = getCategories();

  return {
    props: {
      fallback: {
        "/api/categories": categories,
      },
    },
  };
}

export default function CategoryCards({ fallback }) {
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <CategoryCardGrid />
    </SWRConfig>
  );
}
