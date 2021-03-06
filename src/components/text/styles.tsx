import styled from "styled-components";
import { alignments } from "../../styles";

export const StylesWrapper = styled.p`
  color: var(--black);
  font-weight: 400;
  margin: 0;

  &.regular {
    font-size: 0.938rem;
  }

  &.small {
    font-size: 0.75rem;
  }

  ${alignments}
`;
