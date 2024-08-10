import { IFeature } from '../../../../features/FindPlaceForm/model/types'
import { highlighter } from '../../../../shared/lib/helpers/highlighter'

import styles from './SearchList.module.css'

interface ISearchListProps {
    className?: string
    items?: IFeature[]
    chosenId?: string
    searchValue?: string
    chosePlace?: (place: IFeature) => void
}

export const SearchList: React.FC<ISearchListProps> = (props) => {
    const { items, chosePlace, chosenId, searchValue, className = '' } = props

    return (
        <>
            {items?.map((item) => (
                <ul
                    role="option"
                    key={item.id}
                    onClick={() => chosePlace?.(item)}
                    className={`${styles.SearchList} ${item.id === chosenId ? styles.active : ''}  ${className}`}
                >
                    {highlighter(item.place_name, searchValue, styles.highlight)} <hr />
                </ul>
            ))}
        </>
    )
}
