import style from "./style.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color: "purple" | "secondary" | "tertiary" | "yellow-light";
}

const Button = ({ children, ...props }: ButtonProps) => {

    const selctedClass = () => {
        if (props.color === "purple") {
            return style["purple"];
        } else if (props.color === "secondary") {
            return style.secondary;
        } else if (props.color === "tertiary") {
            return style.tertiary;
        } else if (props.color === "yellow-light") {
            return style['yellow-light'];
        } else {
            return style.purple;
        }
    }

    const className = `${style.button} ${selctedClass()}`;


    return (
        <button className={className}{...props}>
            {children}
        </button>
    )
};

export default Button;