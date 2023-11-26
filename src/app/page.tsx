"use client";

import StandardPageWrapper from "@/components/StandardPageWrapper";
import { Heading, Par, StyledLink } from "@/components/StyledSmalls";

export default function Home() {
  return (
    <StandardPageWrapper>
      <Heading>hey!</Heading>
      <hr />
      <Par>
        there's not much on this site anymore, i mainly use it for subdomains
        and email routing.
      </Par>
      <Par>
        it still has some stuff, but it's pretty casual & unprofessional, so
        don't expect too much.
      </Par>
      <Par>
        if you're looking for my github, it's{" "}
        <StyledLink href="https://github.com/EvieHarv">here</StyledLink>.
      </Par>
      <br />
      <Heading>right now (late nov 2023)</Heading>
      <hr />
      <Par>
        my recent project has been{" "}
        <StyledLink href="https://eee.evie.sh/playground/huffman">
          eee.evie.sh
        </StyledLink>
        , which you can see some of the code for{" "}
        <StyledLink href="https://github.com/EvieHarv/compression/blob/main/src/components/mafs/TreeVisualization.tsx">
          here
        </StyledLink>
        .
      </Par>
      <Par>
        it's a simple little project that aims to provide interactive and
        insightful visualizations of encoding methods/data structures
      </Par>
      <Par>
        right now it's just a few tech demos and tidbits, and i've mainly been
        focusing on making the trees render <i>just</i> right (see:
        reingold-tilford tidy tree algorithm, which i'm using a personally
        modified version of) but soon there should be an article explaining
        huffman coding.
      </Par>
      <Par>
        i want to ultimately work up to explaining gzip, but right now that's
        pretty far away. <br /> a girl can dream!
      </Par>
      <br />
      <Heading>hey before you go</Heading>
      <hr />
      <Par>
        remember to stay silly. never let anyone take that away from you
      </Par>
    </StandardPageWrapper>
  );
}
