import styled from "styled-components";

export const StylesWrapper = styled.div`
  height: auto;
  width: 100%;

  .post-wrapper {
    background-color: var(--white);
    border-radius: var(--border-radius);
    box-shadow: var(--card-shadow);
    display: flex;
    flex-direction: row;
    gap: 1.25rem;

    figure {
      height: inherit;
      width: 4.375rem;
      margin: 0;

      img {
        border-radius: var(--border-radius) 0 0 var(--border-radius);

        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    .content-wrapper {
      padding: 0.625rem 0;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 0.625rem;

      h4,
      p {
        width: 100%;
      }
    }

    button {
      height: 1rem;
      width: 1rem;
      border: none;
      margin: 0;
      padding: 0;
      background: transparent;
      opacity: var(--disabled-opacity);
      cursor: pointer;
      transition: all 200ms ease;
      outline: none;
      margin-left: auto;
      margin-right: 1.25rem;
      align-self: center;

      &:hover {
        opacity: 1;
      }
    }
  }

  p.small {
    margin-top: 0.625rem;
  }
`;

StylesWrapper.displayName = "PostStylesWrapper";
