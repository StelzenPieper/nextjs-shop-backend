import Header from "./Header";
import ContentContainer from "./ContentContainer";
import Footer from "./Footer";

export default function Layout({ chrildren }) {
  return (
    <>
      <Header />
      <ContentContainer>{chrildren}</ContentContainer>
      <Footer />
    </>
  );
}
