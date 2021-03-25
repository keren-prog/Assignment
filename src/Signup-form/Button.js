
function Button (props){

    return (
<div>
<button style={{backgroundColor: props.backgroundColor,color:props.color,}}>{props.text}</button>
</div>
    )
}
export default Button;