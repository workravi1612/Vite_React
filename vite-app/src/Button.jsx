// import styles from './Button.module.css'

function Button(){
    const styles = { //Example of Inline styling
            backgroundColor: "hsl(200, 100%,50%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
    }

    const handleClick = () => console.log("OUCH !")
    const handleClick2 = (name) => console.log(`${name} stop clicking me`)

    return(
        <button style={styles} onClick={ () => handleClick2("Hey")}>Click me</button>
        // <button onClick={handleClick}>Click me</button>
    )

}

export default Button