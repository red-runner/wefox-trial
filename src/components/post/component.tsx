import React from "react";
import { Text } from "../text";
import { Heading } from "../heading";

import { StylesWrapper } from "./styles";

type Props = {
  title: string;
  src: string;
  onDelete: () => void;
  content: string;
  date: string;
};

export const Component = ({ title, src, onDelete, content, date }: Props) => (
  <StylesWrapper className="post-container" data-testid="post-container">
    <div className="post-wrapper">
      <figure>
        <img src={src} alt={title} />
      </figure>
      <div className="content-wrapper">
        <Heading level={Heading.Levels.H4}>{title}</Heading>
        <Text>{content}</Text>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
    <Text size={Text.Sizes.Small}>{date}</Text>
  </StylesWrapper>
);
