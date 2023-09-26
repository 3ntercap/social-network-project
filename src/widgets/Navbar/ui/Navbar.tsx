import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import { useCallback, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button';
import { Portal } from 'shared/ui/Portal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/about" className={cls.mainLink}>{t('О нас')}</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/">{t('Главная')}</AppLink>
                <Button theme={ThemeButton.OUTLINED} onClick={onToggleModal}>{t('Войти')}</Button>
            </div>
            <Portal>
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eius, id ipsa ipsam ipsum laborum mollitia perferendis rerum veniam voluptate.
                </Modal>
            </Portal>
        </div>
    );
};
