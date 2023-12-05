import styles from "../styles/Greeting.module.css";

const name = "Justin Rinehuls"

let hour = new Date().getHours();
let greeting = "Good Morning";
let color = styles.morning;

function Footer() {
    if (hour < 18) {
        greeting = "Good Afternoon";
        color = styles.afternoon;
    } else {
        greeting = "Good Evening";    
        color = styles.evening;   
    }
    return(
        <h1 className={color}>{greeting}</h1>
    );
}

export default Footer