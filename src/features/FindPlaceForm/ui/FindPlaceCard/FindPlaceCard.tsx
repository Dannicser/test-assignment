import { IFeature } from '../../model/types'

import styles from './FindPlaceCard.module.css'

interface IFindPlaceCardProps extends IFeature {
    className?: string
}

export const FindPlaceCard: React.FC<IFindPlaceCardProps> = (props) => {
    return (
        <div className={`${styles.FindPlaceCard} ${props.className}}`}>
            <span>{props?.id}</span> <span>{props?.place_name}</span>
        </div>
    )
}
