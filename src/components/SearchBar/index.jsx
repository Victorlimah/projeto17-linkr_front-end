import { useState, useContext } from "react";
import { DebounceInput } from 'react-debounce-input';
import DataContext from "../../providers/DataContext";
import axios from "axios";
import { IoMdSearch } from "react-icons/io";

import * as S from "./styles";
import OptionsSearchBar from "../OptionsSearchBar";


export default function SearchBar() {

    const [value, setValue] = useState("");
    const [users, setUsers] = useState([]);
    const { data } = useContext(DataContext);
    const API = data.API;

    function catchUsers() {
        if (value !== "") {
            axios
                .post(`${API}/timeline-users`, { value, id: data.user.id })
                .then((response) => {
                    const { data } = response;
                    setUsers(data);
                    console.log(data)
                })
        } else {
            setUsers([]);
        }
    }

    return (
        <S.SearchAll>
            <S.SearchEmpty>
                <DebounceInput
                    className="input"
                    minLength={2}
                    debounceTimeout={50}
                    element="input"
                    placeholder="Search for people"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                        catchUsers();
                    }}
                >
                </DebounceInput>
                <IoMdSearch className="icon" />
            </S.SearchEmpty>
            <S.Search isEmpty={value.length === 0}>
                {value !== "" &&
                    users.map((option) => {
                        return (
                            <OptionsSearchBar key={option.picture + option.username}
                                username={option.username} picture={option.picture} id={option.id} 
                                followerId={option.followerId} idCompare={data.user.id}/>
                        )
                    })
                }
            </S.Search >
        </S.SearchAll>
    )
}