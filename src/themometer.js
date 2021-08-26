class Calculator extends React.Component{
    constructor(props) {
        super(props)
        this.onInputC = this.onInputC.bind(this)
        this.onInputF = this.onInputF.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            temperature: 0
        }
    }

    onInputC(event) {
        console.log("C onInput")
        this.setState = {
            temperature : event.target.value
        }
        console.log(this.state.temperature)
    }

    onInputF(event) {
        console.log("F oninput")
        this.setState = {
            temperature : (event.target.value-32)*5/9
        }
        console.log(this.state.temperature)
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(event.target.querySelector("input#c").value)
        console.log("form submit")
    }

    render() {
        return <form onSubmit={this.handleSubmit}><fieldset>
            <p>{this.state.temperature}</p>
            <legend>Themometer</legend>
            <InputC onInput={this.onInputC} temperature={this.state.temperature}/>
            <InputF onInput={this.onInputF} temperature={this.state.temperature*9/5+32}/>
            <button type="submit" value="Submit">Submit</button>
            <Verdict temperature={this.state.temperature}/>
        </fieldset></form>
    }
}

class InputC extends React.Component{
    constructor(props) {
        super(props)
        this.state = {scale: "c", temperature: 0}
    }

    render() {
        return <input id="c" onInput={this.props.onInput}></input>
    }
}

class InputF extends React.Component{
    constructor(props) {
        super(props)
        this.state = {scale: "f", temperature: 0}
    }

    render() {
        return <input id="f" onInput={this.props.onInput}></input>
    }
}

class Verdict extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            temperature: this.props.temperature
        }
    }

    render() {
        return <div>
            {this.state.temperature > 100? "water will boil" : "water will not boil"}
        </div>
    }
}

ReactDOM.render(<Calculator />, document.querySelector("#themometer"))