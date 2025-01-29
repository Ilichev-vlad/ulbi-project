import { classNames } from 'shared/utils/classNames/classNames';
import cls from './SideBar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';

interface SideBarProps {
    className?: string;
}

const SideBar = ({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
            <Button onClick={onToggle} className={classNames(cls.ToggleButton)}>TOGGLE</Button>
            <div>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};

export { SideBar };
