import Link from "next/link";
import { FooterContainer } from "./Footer.styled";

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <Link href="/products">Products</Link>
        <Link href="/categories">Categories</Link>
        <Link href="/addNewProduct">Add Product</Link>
        <Link href="/addNewCategory">Add Categroy</Link>
      </FooterContainer>
    </>
  );
}
