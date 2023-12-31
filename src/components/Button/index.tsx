import "./styles.css";

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ text, className, onClick }: ButtonProps) => {
  return (
    <button
      className={className ? `${className} button` : 'button'}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
