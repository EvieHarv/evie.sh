"use client";

import StandardPageWrapper from "@/components/StandardPageWrapper";
import { Heading, ILCode, Par, StyledLink } from "@/components/StyledSmalls";

export default function ContactPage() {
  return (
    <StandardPageWrapper>
      <Heading>about</Heading>
      <hr />
      <Par>
        hey!!! i'm evie, a trans woman who's been programming and doing random
        tech junk for about 10 years.
      </Par>
      <Par>
        i have a ton of love across all sorts of tech: building servers,
        designing circuit boards (poorly), building robots, doing backend API
        design, frontend react stuff, building keyboards, building and flying
        fpv racing drones, and a ton of other stuff!
      </Par>
      <Par>
        i go by <ILCode>she/her</ILCode> or <ILCode>she/they</ILCode> depending
        on how cool i'm feeling. it's not a huge deal, just be chill.
      </Par>
      <Par>
        i'm studying computer science, math, and women's & gender studies @ UNO.
      </Par>
      <br />
      <Heading>oh hey thanks</Heading>
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
