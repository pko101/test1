export function AccessibleName(){
    return(
        <div>
            <button>Submit</button>
            <button>Cancel</button>
            <label htmlFor="sampleTextBox">Enter user Name</label>
            <input aria-label="sampleLabel" id="sampleTextBox" />
        </div>
    )
}
export function IconButtons(){
    return(
        <div>
            <button aria-label="Add"><svg></svg></button>
            <button aria-label="Delete"><svg/></button>
        </div>
    )
}