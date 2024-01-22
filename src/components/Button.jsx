// eslint-disable-next-line react/prop-types
const Button = ({ className, children, click }) => {
  return (
    <button className={className} onClick={click}>
      {children}
    </button>
  );
};

export default Button;
