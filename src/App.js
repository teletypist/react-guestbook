import React from 'react';

const testEntries = [
    {
        name: "John Smith",
        message: "Loved my stay, so wonderful"
    }, {
        name: "John Smith",
        message: "Couldn't resist coming back, loved it even more"
    }, {
        name: "Jane Peters",
        message: "Really hard to book, totally worth it"
    }, {
        name: "John Smith",
        message: "I just keep booking in because it is so great"
    }, {
        name: "John Smith",
        message: "It's official, I'm moving in"
    }
]

const Input = ({value, onChange, label}) => <input value={value} type="text" onChange={onChange} className="input" placeholder={label} />
const TextArea = ({value, onChange, label}) =>  <textarea className="textarea" value={value} onChange={onChange} placeholder={label} />
const Button = ({onClick}) => <button className="button" onClick={onClick}>Submit</button>

const Entry = ({name, message}) => <div>{name} | {message}</div>
const EntryList = ({entries}) => <div className="entrylist">
    {entries.map( (entry, index) => <Entry {...entry} key={index}/> )}
    {entries.length === 0 && <span>No entries ATM</span>}
</div>

const Form = ({message, name, onNameChange, onMessageChange, onSubmit}) => <div className="form">
    <Input value={name} onChange={onNameChange} label="Name" />
    <TextArea value={message} onChange={onMessageChange} label="Leave a message" />
    <Button onClick={onSubmit}/>
</div>

const Container = ({children}) => <div>{children}</div>

class App extends React.Component {

    state = {
        name: '',
        message: '',
        entries: testEntries,
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
                    message,
                },
                ...entries
            ]
        })
    }

    render() {
        const {entries, name, message} = this.state
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
