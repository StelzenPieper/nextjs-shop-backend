import { SWRConfig } from "swr";
import { getCategories } from "../src/services/get-categories";
import swrFetcher from "../src/lib/swr-fetcher";
import CategoryCardGrid from "../src/components/CategoryCardGrid";
import CategoryModal from "../src/components/NewCategoryModal";
import { useState } from "react";
import { OpenModalButton } from "../src/components/Buttons.styled";

export async function getStaticProps() {
  const categories = await getCategories();

  return {
    props: {
      fallback: {
        "/api/categories": categories,
      },
    },
  };
}

export default function CategoryCards({ fallback }) {
  const [show, setShow] = useState(false);

  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <OpenModalButton onClick={() => setShow(true)}>Add</OpenModalButton>
      <CategoryModal
        onClose={() => {
          setShow(false);
        }}
        show={show}
      />
      <CategoryCardGrid />
    </SWRConfig>
  );
}
