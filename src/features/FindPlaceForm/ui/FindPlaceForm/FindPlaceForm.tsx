import { useCallback, useLayoutEffect, useState } from 'react';

import { SearchForm } from '../../../../entities/SearchForm';
import { SearchFormApi } from '../../api/searchFormApi';

import { useDebounce } from '../../../../shared/lib/hooks/useDebounce';

import { IFeature } from '../../model/types';

import { FindPlaceCard } from '../FindPlaceCard/FindPlaceCard';

import styles from './FindPlaceForm.module.css';

interface IFindPlaceFormProps {
    className?: string
}

export const FindPlaceForm: React.FC<IFindPlaceFormProps> = ({ className = '' }) => {
    const [isFocused, setIsFocus] = useState<boolean>(false);
    const [text, setText] = useState<string>('');
    const [places, setPlaces] = useState<IFeature[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [chosenPlace, setChosenPlace] = useState<null | IFeature>(null);

    useLayoutEffect(() => {
        if (text) {
            setIsLoading(true);
            getPlaces();
        } else {
            setPlaces([]);
        }
    }, [text]);

    const getPlaces = useDebounce(async () => {
        try {
            await SearchFormApi.getPlaceByName(text).then((data) => setPlaces(data));
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    }, 500);

    const updateText = useCallback(
        (text: string) => {
            setText(text);
        },
        [text]
    );

    const changeFocus = useCallback(
        (isFocused: boolean) => {
            setIsFocus(isFocused);
        },
        [isFocused]
    );

    const chosePlace = useCallback(
        (place: IFeature) => {
            setChosenPlace(place);
        },
        [chosenPlace]
    );

    return (
        <div className={`${styles.FindPlaceForm} ${className}`}>
            <div className={`${styles.form}`}>
                <SearchForm
                    isFocused={isFocused}
                    chosePlace={chosePlace}
                    onChangeFocus={changeFocus}
                    onChange={updateText}
                    value={text}
                    isLoading={isLoading}
                    items={places}
                />
            </div>
            <FindPlaceCard id={chosenPlace?.id} place_name={chosenPlace?.place_name} />
        </div>
    );
};
