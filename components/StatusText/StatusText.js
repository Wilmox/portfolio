import { useEffect } from 'react';
import styles from './StatusText.module.css';

const StatusText = ({text="Student"}) => {

  useEffect(() => {
    const cycle = document.getElementById("cycle");

    const statusList = [
      "Engineering Student",
      "AI & Robotics Graduate", //\u{1F393}
      "Computer Nerd", //\u{1F468}\u{200D}\u{1F4BB}
      "Astronomy Freak", //\u{1F30C}
      "Verified Freelancer", //\u{1F468}\u{200D}\u{1F4BC}
      "Web developer",
      "Your Next Hire."
    ]

    let i = 0;
    let counter = 0;
    const cycleText = () => {
      cycle.fadeOut = () => {
        elem.html(statusList[counter]);
        counter++;
        if(counter >= statusList.length) { counter = 0; }
        elem.fadeIn();
    };
      cycle.innerHTML = statusList[i];
      i = ++i % statusList.length;
    };
    cycleText();
    setInterval(cycleText, 2700);
  }, []);

  return (
      <h2 id="cycle" className={styles.status}>
            {text}
      </h2> 
    );
}
 
export default StatusText;