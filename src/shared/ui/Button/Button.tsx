import { classNames } from 'shared/utils/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props;
    return (
        <button
            className={classNames(cls.Button, {}, [cls[theme], className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export { Button };
