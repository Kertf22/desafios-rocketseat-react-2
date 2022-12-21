import style from "./style.module.scss"


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: "sm" | "md" | "lg" | "xl";
};

const Input = ({ className = "md", ...rest }: InputProps) => {


    const classNames = () => {
        return `${style.input}  ${style[className]}`;
    }

    return (
        <input
            className={classNames()}
            {...rest}
        />
    );
};

export default Input;