import styled from "styled-components";

export const StylesWrapper = styled.fieldset`
  height: max-content;
  border: none;
  margin: 0;
  padding: 0;

  option {
    font-size: var(--regular-text-size);
  }

  select {
    width: 100%;
    border-radius: 4px;
    border: none;
    transition: all ease 200ms;
    outline: none;
    padding: 0.5rem 1.725rem 0.5rem 0.625rem;
    box-shadow: var(--card-shadow);
    height: 2.5rem;
    font-size: var(--regular-text-size);

    &.disabled {
      opacity: var(--disabled-opacity);
      pointer-events: none;
    }
  }
`;

StylesWrapper.displayName = "SelectStylesWrapper";
