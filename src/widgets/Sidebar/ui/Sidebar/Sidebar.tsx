import {classNames} from "shared/lib/helpers/classNames/classNames";
import cls from './Sidebar.module.scss';
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";
import {Button, ThemeButton} from "shared/ui/Button";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <div className={cls.switchers}>
                <Button className={cls.btn} theme={ThemeButton.CLEAR} onClick={onToggle}>{collapsed ? "Развернуть" : "Свернуть"}</Button>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};