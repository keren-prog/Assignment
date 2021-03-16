import './Home.css'
import Button from './Button'
import TextArea from './TextArea'
import Inputfield from './Inputfield'
import SelectOption from './SelectOption'
import Nav from './Nav'
import Radio from './Radio'



function Home () {

    return(
    <div>
        <Button text='Click' color='#d50000'/>
        <Button text='Submit' color='#1e88ef'/>
        <Button  text='Clear' color='#463e3f'/>
        <Button text='Cancel' color=' #6AA121'/>
        <Button text='Export' color='#00ff00'/>
        <Button text='Alert me' color='#ffa500'/>
        <TextArea/>
        <Inputfield placeholder='Student id' type='text' />
        <Inputfield placeholder='Student password' type='text'/>
        <Inputfield placeholder='Email address' type='text'/>
        <Nav/>
        <Radio type='radio' value='Male' name='gender'/> Male
        <Radio type='radio' value='Female' name='gender'/> Female
        <SelectOption />
    </div>
    )
}

export default Home;