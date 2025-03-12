import { FunctionComponent } from "react";
import { CustomInputContainer } from "./custom-input.styles";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError: boolean;
}
const CustomInput: FunctionComponent<CustomInputProps> = ({
  hasError,
  ...rest
}) => {
  return <CustomInputContainer hasError={hasError} {...rest} />;
};

export default CustomInput;
