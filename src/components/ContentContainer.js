import { Container } from "./ContentContainter.styled";

export default function ContentContainer({ children }) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}
