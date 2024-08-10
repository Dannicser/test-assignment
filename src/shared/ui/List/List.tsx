import styles from './List.module.css'

interface IListProps {
    className?: string
    children: React.ReactElement
    notFound?: boolean
}

export const List: React.FC<IListProps> = ({ className = '', children, notFound }) => {
    return (
        <li className={`${styles.List} ${className}`} role="listbox">
            {notFound ? <ul className={styles.notFound}>Not Found</ul> : null}
            {children}
        </li>
    )
}
