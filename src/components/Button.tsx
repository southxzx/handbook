import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  prefixIcon: React.ReactNode;
}

const Button: React.FC<Props> = ({ prefixIcon, ...rest }) => {
  return (
    <div>
      <button {...rest} />
    </div>
  );
};

export default Button;
