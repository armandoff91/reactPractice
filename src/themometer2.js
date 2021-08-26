class Calculator extends React.Component{
    constructor(props) {
        super(props)
        this.onInputC = this.onInputC.bind(this)
        this.onInputF = this.onInputF.bind(this)
        this.onChangeC = this.onChangeC.bind(this)
        this.onChangeF = this.onChangeF.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.verdict = this.verdict.bind(this)
        this.state = {
            scale: "c",
            temperature: 0,
        }
    }

    onInputC(event) {
        console.log("onInputC triggered")
        this.setState({
            scale: "c",
            temperature : event.target.value
        })
    }

    onInputF(event) {
        console.log(event.target.value)
        this.setState({
            scale: "f",
            temperature : event.target.value
        }, ()=> {
            console.log(this.state.temperature)
            console.log(this.state.scale)
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state.temperature)
        console.log("form submit")
    }

    onChangeC() {
        return this.state.scale === "f"? (this.state.temperature-32)*5/9 : this.state.temperature
    }

    onChangeF() {
        return this.state.scale === "c"? this.state.temperature*9/5+32 : this.state.temperature
    }

    verdict() {
        return this.state.scale === "c" ? (this.state.temperature >= 100? "Water will boil" : "Water will not boil")
            : (this.state.temperature >= 212? "Water will boil" : "Water will not boil")
    }

    render() {
        return <form onSubmit={this.handleSubmit}><fieldset>
            <legend>Themometer</legend>
            <InputC onInput={this.onInputC} sync={this.onChangeC}/>
            <InputF onInput={this.onInputF} sync={this.onChangeF}/>
            <button type="submit" value="Submit">Submit</button>
            <Verdict verdict={this.verdict}/>
        </fieldset></form>
    }
}

class InputC extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return <input id="c" onInput={this.props.onInput} value={this.props.sync()}></input>
    }
}

class InputF extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return <input id="f" onInput={this.props.onInput} value={this.props.sync()}></input>
    }
}

class Verdict extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        const verdict = this.props.verdict()
        return <div id="v">
            {verdict}
        </div>
    }
}

ReactDOM.render(<Calculator />, document.querySelector("#themometer"))