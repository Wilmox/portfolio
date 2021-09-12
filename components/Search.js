import style from './Search.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

export default function Search() {
    const [input, setInput] = useState('');
    const router = useRouter();

    useEffect(() => {
        /*if (input != '') {*/
            router.push('/notes?search=' + input);
        /*} else {
            router.push('/notes');
        }*/
        console.log("You searched", input);
      }, [input]);

    const search = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    return (
        <div className={style.search}>
                <SearchIcon className={style.search__inputIcon}/>
                <input type="text" placeholder="Search for a note..." value={input} onChange={search} />
        </div>
    )
}