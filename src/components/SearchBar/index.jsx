import * as S from "./styles";
import { useState } from "react";
import { DebounceInput } from 'react-debounce-input';
//import { IoMdSearch } from "react-icons/io";
import OptionsSearchBar from "../OptionsSearchBar";

export default function SearchBar() {

    const [value, setValue] = useState("");
    const [users, setUsers] = useState([]);

    return users.length === 0 ? (
        <S.SearchEmpty>
            <DebounceInput
                minLength={3}
                debounceTimeout={300}
                element="input"
                placeholder="Search for people"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            >
            </DebounceInput>
        </S.SearchEmpty>
    ) : (
        <S.Search>
            <DebounceInput
                minLength={3}
                debounceTimeout={300}
                element="input"
                placeholder="Search for people"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            >
            </DebounceInput>
            {
                users.map((option) => {
                    return (
                        <OptionsSearchBar key={option.picture + option.username}
                            username={option.username} picture={option.picture} />
                    )
                })
            }
        </S.Search>
    )

}