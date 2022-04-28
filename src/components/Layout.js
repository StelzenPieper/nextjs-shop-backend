import Header from "./Header";
import ContentContainer from "./ContentContainer";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </>
  );
}
