import { SWRConfig } from "swr";
import AddNewProductForm from "../src/components/AddNewProductForm";
import swrFetcher from "../src/lib/swr-fetcher";

export default function AddProductForm({ fallback }) {
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <AddNewProductForm />
    </SWRConfig>
  );
}
