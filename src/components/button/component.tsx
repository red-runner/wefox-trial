import { StylesWrapper } from "./styles";
import classnames from "classnames";

type Props = {
  className?: string;
  children: string;
  disabled?: boolean;
  testid?: string;
  onClick: () => void;
};

export const Component = ({
  className,
  children,
  disabled,
  testid,
  onClick,
}: Props) => (
  <StylesWrapper
    className={classnames("button", className, {
      disabled,
    })}
    data-testid={testid}
    onClick={onClick}
  >
    {children}
  </StylesWrapper>
);

Component.displayName = "Button";

Component.defaultProps = {
  testid: "button",
};
