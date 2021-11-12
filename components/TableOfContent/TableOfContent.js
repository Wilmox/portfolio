import { useEffect } from 'react';
import styles from './TableOfContent.module.css';

const TableOfContents = () => {

    useEffect(() => {
        var headings = document.getElementById("content").querySelectorAll("h1");
        let toc = document.getElementById("ToC");

        for (var i=0, max=headings.length; i < max; i++) {
            let tocList = document.createElement("li")
            let tocAnchor = document.createElement("a")
            let tocAnchorText = document.createTextNode(headings[i].textContent);
            let tocListId = headings[i].textContent.replace(/ /g, "_").toLowerCase();

            tocAnchor.setAttribute('href', '#' + tocListId);
            headings[i].setAttribute('id', tocListId);
            tocList.setAttribute('class', headings[i].tagName.toLowerCase())

            tocAnchor.appendChild(tocAnchorText);
            tocList.appendChild(tocAnchor);
            
            console.log(tocList);
            
            toc.appendChild(tocList)
        }

    }, []);

    

    return (
        <nav className={styles.ToC} aria-label="Table of contents">
            <h1>Quick Links</h1>
            <ol id="ToC">

            </ol>
        </nav>
    );
};

export default TableOfContents;