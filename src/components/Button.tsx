export interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => (
  <button onClick={onClick} className=" px-4 py-2 bg-primary rounded-md text-white">
    {label}
  </button>
);

export default Button;
