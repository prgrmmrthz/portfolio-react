import React from "react";
import { useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";

export default function Ltb(props) {

  return (
    <SRLWrapper>
      <a href={props.pic}>
        <img src={props.pic} alt="Blue sky" />
      </a>
    </SRLWrapper>
  );
}
