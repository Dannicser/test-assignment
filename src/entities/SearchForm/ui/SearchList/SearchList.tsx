import { IFeature } from "../../../../features/FindPlaceForm/model/types";

import styles from "./SearchList.module.css";

interface ISearchListProps {
  className?: string;
  items?: IFeature[];
  chosePlace?: (place: IFeature) => void;
}

export const SearchList: React.FC<ISearchListProps> = ({ items, chosePlace, className = "" }) => {
  return (
    <>
      {items?.map((item) => (
        <ul role="option" key={item.id} onClick={() => chosePlace?.(item)} className={`${styles.SearchList} ${className}`}>
          {item.place_name} <hr />
        </ul>
      ))}
    </>
  );
};
