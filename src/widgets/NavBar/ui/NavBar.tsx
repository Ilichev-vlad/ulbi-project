import { classNames } from 'shared/utils/classNames/classNames';
import cls from './NavBar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavBarProps {
    className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <div className={classNames(cls.Links)}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
};

export { NavBar };