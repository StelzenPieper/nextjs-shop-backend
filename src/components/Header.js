import { NavContainer, NavBar } from "./Header.styled";
import { NavButton } from "./Buttons.styled";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <NavContainer>
        <NavBar>
          <Link href="/products" passHref>
            <NavButton>Products</NavButton>
          </Link>
          <Link href="/categories" passHref>
            <NavButton>Categories</NavButton>
          </Link>
          <Link href="/addNewProduct" passHref>
            <NavButton>Add Product</NavButton>
          </Link>
          <Link href="/addNewCategory" passHref>
            <NavButton>Add Category</NavButton>
          </Link>
        </NavBar>
      </NavContainer>
    </>
  );
}
