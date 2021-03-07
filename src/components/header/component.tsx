import React from "react";
import { StylesWrapper } from "./styles";

import { Heading } from "../heading";

import wefoxLogo from "../../assets/wefox.png";

type Props = {
  title: string;
};

export const Component = ({ title }: Props) => (
  <StylesWrapper>
    <figure>
      <img src={wefoxLogo} alt="logo" />
    </figure>
    <Heading alignment={Heading.Alignment.Left} level={Heading.Levels.H4}>
      {title}
    </Heading>
  </StylesWrapper>
);
