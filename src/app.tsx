import { Logo } from "./logo";
import styled from "styled-components";

const BadName = styled.p`
  color: red;
`;

export function App() {
  return (
    <>
      <Logo />
      <BadName>Hello Vite + Preact!</BadName>
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
    </>
  );
}

