import styled from "styled-components";

export const StylesWrapper = styled.div`
  height: 4.375rem;
  width: 100%;

  .post-wrapper {
    display: grid;
    grid-template-columns: 4.375rem auto 50px;
    grid-template-rows: 4.375rem;
    grid-gap: 0.625rem;

    figure {
      height: inherit;
      width: 4.375rem;
      margin: 0;

      img {
        border-radius: var(--border-radius);
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    .content-wrapper {
      background-color: var(--white);
      border-radius: var(--border-radius);
      padding: 10px;
      box-sizing: border-box;
    }
  }
`;
