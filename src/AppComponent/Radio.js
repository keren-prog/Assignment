function Radio (props){
    return (
<div>
 <input type={props.type} value={props.value} name={props.name} />
</div>
    )
}
export default Radio;