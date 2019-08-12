import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button as RNButton
} from 'react-native';

import styles from './style';

const testEntries = [
]


const Input = ({value, onChange, label}) => <TextInput value={value} type="text" style={styles.input} onChange={onChange} placeholder={label} />
const TextArea = ({value, onChange, label}) =>  <TextInput value={value} style={styles.textarea} onChange={onChange} placeholder={label} />
const Button = ({onClick}) => <View style={styles.button}>
    <RNButton title="Start" color="#841584" onPress={onClick} />
</View>

const Entry = ({name, message}) => <Text>{name} | {message}</Text>
const EntryList = ({entries}) => <View style={styles.entrylist}>
    {entries.map( (entry, index) => <Entry {...entry} key={index}/> )}
    {entries.length === 0 && <Text>No entries ATM</Text>}
</View>

const Form = ({message, name, onNameChange, onMessageChange, onSubmit, running, time}) => <View style={styles.form}>
    <Input value={name} onChange={onNameChange} label="Name" />
    <TextArea value={message} onChange={onMessageChange} label="Leave a message" />
    <Button onClick={onSubmit} running={running} time={time}/>
</View>

const Container = ({children}) => <View style={styles.root}>{children}</View>

class App extends React.Component {

    state = {
        name: '',
        message: '',
        entries: testEntries,
        start: -1,
        time: 0,
        running: false,
    }

    onNameChange = (ev) => {
        this.setState({
            name: ev.target.value
        })
    }

    onMessageChange = (ev) => {
        this.setState({
            message: ev.target.value
        })
    }

    onSubmit = (ev) => {
        const {name, message, entries} = this.state;
        this.setState({
            name: '',
            message: '',
            entries: [
                {
                    name,
                    message
                },
                ...entries
            ]
        })
    }

    render() {
        const {entries, name, message, running, start} = this.state
        let time = (+new Date()) - start;
        return (<Container>
            <Form
                message={message}
                name={name}
                onNameChange={this.onNameChange}
                onMessageChange={this.onMessageChange}
                onSubmit={this.onSubmit} />
            <EntryList entries={entries}/>
        </Container>);
    }
}

export default App;
