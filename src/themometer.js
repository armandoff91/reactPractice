class Calculator extends React.Component{
    constructor(props) {
        super(props)
        this.handleChangeC = this.handleChangeC.bind(this)
        this.handleChangeF = this.handleChangeF.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            temperature: 0
        }
    }

    handleChangeC(event) {
        this.setState = {
            temperature : event.target.value
        }
    }

    handleChangeF(event) {
        console.log("change f" + event.target.value)
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(event.target.querySelector("input#c").value)
        console.log("form submit")
    }

    render() {
        return <form onSubmit={this.handleSubmit}><fieldset>
            <legend>Themometer</legend>
            <InputC handleChangeC = {this.handleChangeC}/>
            <InputF handleChangeF = {this.handleChangeF}/>
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
        return <input id="c" value={this.state.temperature} onChange={this.props.handleChangeC}></input>
    }
}

class InputF extends React.Component{
    constructor(props) {
        super(props)
        this.state = {scale: "f", temperature: 0}
    }

    render() {
        return <input id="f" value={this.state.temperature} onChange={this.props.handleChangeF}></input>
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