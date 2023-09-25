import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import './PageError.scss';
import { Button, ThemeButton } from 'shared/ui/Button';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames('pageError', {}, [className])}>
            <Button theme={ThemeButton.CLEAR} onClick={reloadPage}>[RELOAD]</Button>
        </div>
    );
};
