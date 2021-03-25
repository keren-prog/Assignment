import "./Checkbox.css"
function Checkbox (props){
    return (
        <div className="checkbox">
        <input type={props.type}/> <p style={{color:"grey"}} >{props.text}</p> 
        </div>
    )
}
export default Checkbox;