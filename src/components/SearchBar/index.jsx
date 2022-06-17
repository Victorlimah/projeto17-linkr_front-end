import { useState, useEffect, useContext } from "react";
import { DebounceInput } from 'react-debounce-input';
import DataContext from "../../providers/DataContext";
import axios from "axios";
//import { IoMdSearch } from "react-icons/io";

import * as S from "./styles";
import OptionsSearchBar from "../OptionsSearchBar";


export default function SearchBar() {

    const [value, setValue] = useState("");
    const [users, setUsers] = useState([]);
    const { data } = useContext(DataContext);
    const API = data.API;
    let search = "";

    function catchUsers(value) {
        if (value) {
            axios
                .post(`${API}/timeline-users`, { value })
                .then((response) => {
                    const { data } = response;
                    setUsers(data);
                })
        } else {
            setUsers([]);
        }
    }

    useEffect(() => {
        search = value;
    }, [value])

    console.log(users)

    return users.length === 0 ? (
        <S.SearchEmpty>
            <DebounceInput
                minLength={3}
                debounceTimeout={300}
                element="input"
                placeholder="Search for people"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                    if (value) {
                        catchUsers(search)
                    }
                }}
            >
            </DebounceInput>
        </S.SearchEmpty >
    ) : (
        <S.Search>
            <DebounceInput
                minLength={3}
                debounceTimeout={300}
                element="input"
                placeholder="Search for people"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                    catchUsers()
                }
                }
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