import style from './Search.module.css';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {

    const search = e => {
        e.preventDefault();

        console.log("You searched", input);
    }

    return (
        <div className={style.search}>
                <SearchIcon className={style.search__inputIcon}/>
                <input type="text" placeholder="Search for a note..." onChange={e => console.log(e)} />
        </div>
    )
}