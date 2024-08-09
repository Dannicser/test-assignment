import { InputHTMLAttributes } from 'react'

import { Loader, SizeLoader } from '../Loader/Loader'

import styles from './Input.module.css'

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface IInputProps extends HtmlInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    isLoading?: boolean
}

export const Input: React.FC<IInputProps> = (props) => {
    const { className = '', placeholder, onChange, value, isLoading } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={`${styles.Input} ${className}`}>
            <input
                onChange={onChangeHandler}
                value={value}
                placeholder={placeholder}
                className={styles.input}
                type="text"
            />
            {isLoading ? (
                <div className={styles.loader}>
                    <Loader size={SizeLoader.SMALL} />
                </div>
            ) : null}
        </div>
    )
}
