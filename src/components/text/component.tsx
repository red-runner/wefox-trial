import { FC } from "react";
import classnames from "classnames";

import { StylesWrapper } from "./styles";

enum Sizes {
  Regular = "regular",
  Small = "small",
}

enum Alignment {
  Left = "left-aligned",
  Center = "centered",
  Right = "right-aligned",
}

type Props = {
  children: string;
  size?: Sizes;
  alignment?: Alignment;
};

type TextComponent<P> = FC<P> & {
  Sizes: typeof Sizes;
  Alignment: typeof Alignment;
};

export const Component: TextComponent<Props> = ({
  children,
  size = Sizes.Regular,
  alignment = Alignment.Left,
}: Props) => (
  <StylesWrapper
    className={classnames("text", size as string, alignment as string)}
  >
    {children}
  </StylesWrapper>
);

Component.displayName = "Text";
Component.Sizes = Sizes;
Component.Alignment = Alignment;
