import style from './Search.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function Search() {
    const [input, setInput] = useState('');

    const search = (e) => {
        setInput(e.target.value);
        console.log("You searched", input);
    }

    return (
        <div className={style.search}>
                <SearchIcon className={style.search__inputIcon}/>
                <input type="text" placeholder="Search for a note..." value={input} onChange={search} />
        </div>
    )
}