"use client";

import StandardPageWrapper from "@/components/StandardPageWrapper";
import { Heading, Par } from "@/components/StyledSmalls";

export default function ContactPage() {
  return (
    <StandardPageWrapper>
      <Heading>contact me</Heading>
      <hr />
      <Par>
        my dream is to someday receive communication via carrier pigeon. i just
        think it'd be neat.
      </Par>
      <br />
      <Par>however that seems unlikely, so you could try email instead:</Par>
      <Par>
        <b>evie (@) evie.sh</b> is gonna be the best address for that right now
      </Par>
    </StandardPageWrapper>
  );
}
