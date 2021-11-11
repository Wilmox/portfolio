import { useEffect } from 'react';
import styles from './TableOfContent.module.css';

const TableOfContents = () => {

    useEffect(() => {
        let toc = document.getElementById("ToC");

        var headings = document.getElementById("content").querySelectorAll("h1, h2, h3, h4, h5, h6");
        for (var i=0, max=headings.length; i < max; i++) {
            console.log(headings[i]);

            let tocList = document.createElement("li")
            let tocLink = document.createElement("a")
            let tocLinkText = document.createTextNode(headings[i].textContent)
            
            tocList.setAttribute('href', headings[i])
            //tocList.setAttribute('id', headings[i].tagName.toLowerCase())

            tocLink.appendChild(tocLinkText);
            tocList.appendChild(tocLink);
            
            console.log(tocList);
            
            toc.appendChild(tocList)


            /*switch (headings[i].tagName) {
                case "H1":
                    tocElement.appendChild()
                    console.log("1", headings[i].textContent)
                    break;

                case "H2":
                    console.log("2", headings[i].textContent)
                    break;

                case "H3":
                    console.log("3", headings[i].textContent)
                    break;

                case "H4":
                    console.log("4", headings[i].textContent)
                    break;

                case "H5":
                    console.log("5", headings[i].textContent)
                    break;

                case "H6":
                    console.log("6", headings[i].textContent)
                    break;
                    
                default:
                    break;
            }*/
        }
    }, []);

    return (
        <nav className={styles.ToC} aria-label="Table of contents">
            <ol id="ToC">
                {/*{headings.map((heading) => (
                <li key={heading}>
                <a href="#">{heading.innerHTML}</a>
                </li>
            ))}*/}
            </ol>
        </nav>
    );
};

export default TableOfContents;