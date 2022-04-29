import { SWRConfig } from "swr";
import AddNewCategoryForm from "../src/components/AddNewCategoryForm";
import swrFetcher from "../src/lib/swr-fetcher";

export default function AddCategoryForm({ fallback }) {
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <AddNewCategoryForm />
    </SWRConfig>
  );
}
