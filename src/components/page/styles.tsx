import styled from "styled-components";

export const StylesPage = styled.div`
  .main-content {
    max-width: 67.5rem;
    margin: auto;
    padding: 0 2.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;
    min-height: calc(100vh - 3.75rem);

    h1 {
      padding: 5rem 0;
    }

    .section-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 1.875em;

      @media only screen and (min-width: 750px) {
        flex-direction: row;
        justify-content: flex-start;
      }

      .post-selection {
        display: flex;
        flex-direction: column;
        row-gap: 0.625rem;
        flex-basis: 50%;
      }

      .post-update {
        display: flex;
        flex-direction: column;
        row-gap: 0.625rem;
        flex-basis: 50%;
      }
    }

    .post-list {
      display: grid;
      grid-gap: 0.625rem;
      padding: 0;

      li {
        list-style: none;
      }
    }
  }
`;

StylesPage.displayName = "PageStylesWrapper";
