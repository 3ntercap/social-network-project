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
        location.reload();
    };

    return (
        <div className={classNames('pageError', {}, [className])}>
            <div className="noise" />
            <div className="overlay" />
            <div className="terminal">
                <h1>
                    Error
                </h1>
                <p className="output">
                    Please try to
                    <Button theme={ThemeButton.CLEAR} onClick={reloadPage}>[RELOAD]</Button>
                </p>
                <p className="output">Good luck.</p>
            </div>
        </div>
    );
};
