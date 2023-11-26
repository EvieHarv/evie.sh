"use client";

import StandardPageWrapper from "@/components/StandardPageWrapper";
import { Heading, ILCode, Par, StyledLink } from "@/components/StyledSmalls";

export default function ContactPage() {
  return (
    <StandardPageWrapper>
      <Heading>about</Heading>
      <hr />
      <Par>
        <ILCode>she/her</ILCode> or <ILCode>she/they</ILCode> depending on how
        cool i'm feeling
      </Par>
      <Par>studying computer science & math @ UNO</Par>
      <Par>
        here's my{" "}
        <StyledLink href="https://github.com/EvieHarv">github</StyledLink>
      </Par>
      <Par></Par>
      <br />
      <Heading>thanks</Heading>
      <hr />
      <Par>
        this is simply a poor imitation of{" "}
        <StyledLink href="https://fabiensanglard.net/">
          fabien sanglard's site
        </StyledLink>
      </Par>
    </StandardPageWrapper>
  );
}
