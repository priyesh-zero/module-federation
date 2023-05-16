import { FC, HTMLAttributes, PropsWithChildren } from "react";

const Button: FC<PropsWithChildren<HTMLAttributes<HTMLButtonElement>>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <button
            className={`bg-teal-500 text-gray-50 rounded-xl shadow px-4 py-2 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
