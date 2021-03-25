

function Inputfield (props){

    return (
<div>
<input type={props.type} className={props.className} placeholder={props.placeholder}  style={{marginBottom:props.marginBottom}}/>
</div>
    )
}
export default Inputfield;