import Button from './Button'
import TextArea from './TextArea'
import Inputfield from './Inputfield'
import SelectOption from './SelectOption'



function Home () {

    return(
    <div>
        <Button text='click' color='#d50000'/>
        <Button text='submit' color='#1e88ef'/>
        <Button  text='clear' color='#E7312'/>
        <Button text='cancel' color=' #6AA121'/>
        <Button text='go' color='#3B3131'/>
<TextArea/>
        <Inputfield placeholder='student id' type='text' />
        <Inputfield placeholder='student password' type='text'/>

        <SelectOption />
        

    </div>
    )
}






export default Home;