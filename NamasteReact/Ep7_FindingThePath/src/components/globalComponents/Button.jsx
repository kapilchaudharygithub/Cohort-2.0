const Button = ({ buttonName, buttonClasses, onClickHandler }) => {
  const buttonClass = `  text-sm text-center 
   ${buttonClasses}`;
  return (
    <button onClick={onClickHandler} className={buttonClass}>
      {buttonName}
    </button>
  );
};
export default Button;
