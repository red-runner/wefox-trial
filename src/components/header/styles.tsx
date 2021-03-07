import styled from "styled-components";

export const StylesWrapper = styled.header`
  display: flex;
  background: var(--white);
  align-items: center;
  padding: 5px;
  box-shadow: 0 1px 0 0 var(--grey);
  gap: 0.625rem;
  height: 3.75rem;
  position: sticky;
  top: 0;

  figure {
    height: inherit;
    width: 3.75rem;
    margin: 0;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  h4 {
    margin-bottom: 8px;
  }
`;

StylesWrapper.displayName = "HeaderStylesWrapper";
