"use client";

import { SPACINGS, SPACINGS_INT, WEIGHTS } from "@/lib/constants";
import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <FullContainer>
      <WidthContainer>
        <Link href="/">evie.sh</Link>
        <hr />
        <LinksContainer>
          <Link href="/">home</Link>
          <Link href="/about">about</Link>
          <Link href="/projects">projects</Link>
          <Link href="/contact">contact</Link>
        </LinksContainer>
      </WidthContainer>
    </FullContainer>
  );
}

const FullContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  font-weight: ${WEIGHTS.bold};
  margin-bottom: ${SPACINGS_INT.padding * 2}px;
`;

const WidthContainer = styled.div`
  text-align: center;
  width: fit-content;
`;

const LinksContainer = styled.nav`
  display: flex;
  justify-content: center;
  gap: ${SPACINGS.padding};
`;

// Seperator
const Sep = styled.span`
  &::before {
    content: "|";
  }
`;
