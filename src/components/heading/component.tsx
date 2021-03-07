import classnames from "classnames";
import { FC, HTMLProps } from "react";
import styled from "styled-components";
import { headings, alignments } from "../../styles";

enum Levels {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
}

enum Alignment {
  Left = "left-aligned",
  Center = "centered",
  Right = "right-aligned",
}

type Props = {
  level?: Levels;
  alignment?: Alignment;
  children: string;
};

type HeadingComponent<P> = FC<P> & {
  Levels: typeof Levels;
  Alignment: typeof Alignment;
};

export const headingLevels: {
  [key in Levels]: FC<Omit<HTMLProps<HTMLHeadingElement>, "ref" | "as">>;
} = {
  [Levels.H1]: styled.h1`
    ${headings}
    ${alignments}
    font-size: var(--heading-h1-font-size);
  `,
  [Levels.H2]: styled.h2`
    ${headings}
    ${alignments}
  `,
  [Levels.H3]: styled.h3`
    ${headings}
    ${alignments}
  `,
  [Levels.H4]: styled.h4`
    ${headings}
    ${alignments}
    font-size: var(--heading-h4-font-size);
    line-height: 1.5rem;
  `,
};

export const Component: HeadingComponent<Props> = ({
  level,
  children,
  alignment = Alignment.Left,
}: Props) => {
  const Heading = headingLevels[level || Levels.H1];

  return (
    <Heading className={classnames(alignment as string)}>{children}</Heading>
  );
};
Component.displayName = "Heading";
Component.Levels = Levels;
Component.Alignment = Alignment;
