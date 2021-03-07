import { Text } from "../text";
import { Heading } from "../heading";

import { StylesWrapper } from "./styles";
import close from "../../assets/close.svg";

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
      </div>
      <button onClick={onDelete}>
        <img src={close} alt="close" />
      </button>
    </div>
    <Text size={Text.Sizes.Small} alignment={Text.Alignment.Right}>
      {date}
    </Text>
  </StylesWrapper>
);
