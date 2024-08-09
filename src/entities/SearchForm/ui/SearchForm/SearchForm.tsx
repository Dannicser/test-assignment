import { IFeature } from "../../../../features/FindPlaceForm/model/types";
import { Input, List } from "../../../../shared/ui";
import { SearchList } from "../SearchList/SearchList";

import styles from "./SearchForm.module.css";

interface ISearchFormProps {
  className?: string;
  items?: IFeature[];
  isLoading?: boolean;
  isFocused?: boolean;
  onChange?: (value: string) => void;
  onChangeFocus?: (isFocused: boolean) => void;
  chosePlace?: (place: IFeature) => void;
  value?: string;
}

export const SearchForm: React.FC<ISearchFormProps> = (props) => {
  const { className = "", items, isLoading, onChange, value, isFocused, onChangeFocus, chosePlace } = props;

  const onChangeFocusHandler = (focus: boolean) => {
    onChangeFocus?.(focus);
  };

  return (
    <div className={`${styles.SearchForm} ${className}`}>
      <div onClick={() => onChangeFocusHandler(true)}>
        <Input value={value} onChange={onChange} isLoading={isLoading} placeholder="Type a place name" />
      </div>

      <div className={`${styles.list_container}`} onClick={() => onChangeFocusHandler(false)}>
        {isFocused && value?.length && !isLoading ? (
          <List notFound={!isLoading && !items?.length}>
            <SearchList chosePlace={chosePlace} items={items} />
          </List>
        ) : null}
      </div>
    </div>
  );
};
