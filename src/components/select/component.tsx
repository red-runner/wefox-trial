import React from "react";

import classnames from "classnames";

import { StylesWrapper } from "./styles";

export type Options = { value: string; label?: string }[];

export type Props = {
  name?: string;
  options: Options;
  "data-testid"?: string;
  placeholder?: string;
  disabled?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  className?: string;
};

export const Component = ({
  options,
  "data-testid": testid,
  placeholder,
  name,
  disabled,
  value,
  onChange,
  className,
}: Props) => (
  <StylesWrapper
    className={classnames(className, "select-container")}
    data-testid={testid}
  >
    <select
      name={name}
      onChange={onChange}
      className={classnames("select", {
        disabled,
        selected: !!value,
      })}
      value={value}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((_option, index) => (
        <option key={index} value={_option.value}>
          {_option.label}
        </option>
      ))}
    </select>
  </StylesWrapper>
);

Component.displayName = "Select";
