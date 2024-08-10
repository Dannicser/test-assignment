import styles from './Loader.module.css'

interface ILoaderProps {
    className?: string
    size?: SizeLoader
}

export enum SizeLoader {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

export const Loader: React.FC<ILoaderProps> = ({ className = '', size = SizeLoader.MEDIUM }) => {
    return <div className={`${styles.Loader} ${styles[size]} ${className}`}></div>
}
