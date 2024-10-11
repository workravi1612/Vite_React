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

    // const handleClick = () => console.log("OUCH !")
    // const handleClick2 = (name) => console.log(`${name} stop clicking me`)
    // let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} clicked me ${count} time/s`);
    //     }else{
    //         console.log(`${name} stop clicking me!`);
    //     }
    // }

    const handleClick = (e) => {
        // console.log(e)
        e.target.textContent = "Hello";
    }
    return(
        // <button style={styles} onClick={ () => handleClick("Hey")}>Click me</button>
        // Also can use doubleClick rather than onClick
        <button style={styles} onClick={ (e) => handleClick(e)}>Click me</button>
        // <button onClick={handleClick}>Click me</button>
    )

}

export default Button