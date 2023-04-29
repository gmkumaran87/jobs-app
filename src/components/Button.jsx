import PropTypes from "prop-types";

const Button = ({
  type,
  buttonText,
  backgroundColor,
  color,
  height,
  width,
  clickHandler,
  border,
  padding,
  margin,
  fontSize,
}) => {
  let buttonClass = " rounded-md ";

  if (fontSize) {
    buttonClass += ` ${fontSize}`;
  } else {
    buttonClass += " text-base font-medium";
  }
  if (backgroundColor) {
    buttonClass += ` ${backgroundColor}`;
  } else {
    buttonClass += " bg-blue-primary text-white-100";
  }
  if (color) buttonClass += ` ${color}`;
  if (width) buttonClass += ` ${width}`;
  if (height) buttonClass += ` ${height}`;
  if (border) buttonClass += ` ${border}`;
  if (padding) buttonClass += ` ${padding}`;
  if (margin) buttonClass += ` ${margin}`;

  return (
    <button className={buttonClass} type={type} onClick={clickHandler}>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  buttonText: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  border: PropTypes.string,
  margin: PropTypes.string,
  clickHandler: PropTypes.func,
  padding: PropTypes.string,
  fontSize: PropTypes.string,
};

export default Button;
