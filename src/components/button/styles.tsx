import styled from "styled-components";

export const StylesWrapper = styled.button`
  width: fit-content;
  height: 2.5rem;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  white-space: nowrap;
  transition: all ease 200ms;
  gap: 0.625em;
  padding: 0.625em;
  font-size: var(--regular-text-size);
  background-color: var(--button-color);
  color: #333;
  box-shadow: var(--card-shadow);
  font-weight: 600;

  &.disabled {
    opacity: var(--disabled-opacity);
    pointer-events: none;
    background-color: var(--white);
  }
`;

StylesWrapper.displayName = "ButtonStylesWrapper";
