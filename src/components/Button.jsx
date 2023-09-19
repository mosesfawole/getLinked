import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div>
      <button className="font-body w-[152px] h-[53px] rounded bg-gradient-to-r from-purple-600 to-pink-500">
        <Link className="font-body font-normal">Register</Link>
      </button>
    </div>
  );
};

export default Button;
