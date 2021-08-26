var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calculator = function (_React$Component) {
    _inherits(Calculator, _React$Component);

    function Calculator(props) {
        _classCallCheck(this, Calculator);

        var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

        _this.onInputC = _this.onInputC.bind(_this);
        _this.onInputF = _this.onInputF.bind(_this);
        _this.onChangeC = _this.onChangeC.bind(_this);
        _this.onChangeF = _this.onChangeF.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.verdict = _this.verdict.bind(_this);
        _this.state = {
            scale: "c",
            temperature: 0
        };
        return _this;
    }

    _createClass(Calculator, [{
        key: "onInputC",
        value: function onInputC(event) {
            console.log("onInputC triggered");
            this.setState({
                scale: "c",
                temperature: event.target.value
            });
        }
    }, {
        key: "onInputF",
        value: function onInputF(event) {
            var _this2 = this;

            console.log(event.target.value);
            this.setState({
                scale: "f",
                temperature: event.target.value
            }, function () {
                console.log(_this2.state.temperature);
                console.log(_this2.state.scale);
            });
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            event.preventDefault();
            console.log(this.state.temperature);
            console.log("form submit");
        }
    }, {
        key: "onChangeC",
        value: function onChangeC() {
            return this.state.scale === "f" ? (this.state.temperature - 32) * 5 / 9 : this.state.temperature;
        }
    }, {
        key: "onChangeF",
        value: function onChangeF() {
            return this.state.scale === "c" ? this.state.temperature * 9 / 5 + 32 : this.state.temperature;
        }
    }, {
        key: "verdict",
        value: function verdict() {
            return this.state.scale === "c" ? this.state.temperature >= 100 ? "Water will boil" : "Water will not boil" : this.state.temperature >= 212 ? "Water will boil" : "Water will not boil";
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { onSubmit: this.handleSubmit },
                React.createElement(
                    "fieldset",
                    null,
                    React.createElement(
                        "legend",
                        null,
                        "Themometer"
                    ),
                    React.createElement(InputC, { onInput: this.onInputC, sync: this.onChangeC }),
                    React.createElement(InputF, { onInput: this.onInputF, sync: this.onChangeF }),
                    React.createElement(
                        "button",
                        { type: "submit", value: "Submit" },
                        "Submit"
                    ),
                    React.createElement(Verdict, { verdict: this.verdict })
                )
            );
        }
    }]);

    return Calculator;
}(React.Component);

var InputC = function (_React$Component2) {
    _inherits(InputC, _React$Component2);

    function InputC(props) {
        _classCallCheck(this, InputC);

        return _possibleConstructorReturn(this, (InputC.__proto__ || Object.getPrototypeOf(InputC)).call(this, props));
    }

    _createClass(InputC, [{
        key: "render",
        value: function render() {
            return React.createElement("input", { id: "c", onInput: this.props.onInput, value: this.props.sync() });
        }
    }]);

    return InputC;
}(React.Component);

var InputF = function (_React$Component3) {
    _inherits(InputF, _React$Component3);

    function InputF(props) {
        _classCallCheck(this, InputF);

        return _possibleConstructorReturn(this, (InputF.__proto__ || Object.getPrototypeOf(InputF)).call(this, props));
    }

    _createClass(InputF, [{
        key: "render",
        value: function render() {
            return React.createElement("input", { id: "f", onInput: this.props.onInput, value: this.props.sync() });
        }
    }]);

    return InputF;
}(React.Component);

var Verdict = function (_React$Component4) {
    _inherits(Verdict, _React$Component4);

    function Verdict(props) {
        _classCallCheck(this, Verdict);

        return _possibleConstructorReturn(this, (Verdict.__proto__ || Object.getPrototypeOf(Verdict)).call(this, props));
    }

    _createClass(Verdict, [{
        key: "render",
        value: function render() {
            var verdict = this.props.verdict();
            return React.createElement(
                "div",
                { id: "v" },
                verdict
            );
        }
    }]);

    return Verdict;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.querySelector("#themometer"));