var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calculator = function (_React$Component) {
    _inherits(Calculator, _React$Component);

    function Calculator(props) {
        _classCallCheck(this, Calculator);

        var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

        _this.handleChangeC = _this.handleChangeC.bind(_this);
        _this.handleChangeF = _this.handleChangeF.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.state = {
            temperature: 0
        };
        return _this;
    }

    _createClass(Calculator, [{
        key: "handleChangeC",
        value: function handleChangeC(event) {
            this.setState = {
                temperature: event.target.value
            };
        }
    }, {
        key: "handleChangeF",
        value: function handleChangeF(event) {
            console.log("change f" + event.target.value);
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            event.preventDefault();
            console.log(event.target.querySelector("input#c").value);
            console.log("form submit");
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
                    React.createElement(InputC, { handleChangeC: this.handleChangeC }),
                    React.createElement(InputF, { handleChangeF: this.handleChangeF }),
                    React.createElement(
                        "button",
                        { type: "submit", value: "Submit" },
                        "Submit"
                    ),
                    React.createElement(Verdict, { temperature: this.state.temperature })
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

        var _this2 = _possibleConstructorReturn(this, (InputC.__proto__ || Object.getPrototypeOf(InputC)).call(this, props));

        _this2.state = { scale: "c", temperature: 0 };
        return _this2;
    }

    _createClass(InputC, [{
        key: "render",
        value: function render() {
            return React.createElement("input", { id: "c", value: this.state.temperature, onChange: this.props.handleChangeC });
        }
    }]);

    return InputC;
}(React.Component);

var InputF = function (_React$Component3) {
    _inherits(InputF, _React$Component3);

    function InputF(props) {
        _classCallCheck(this, InputF);

        var _this3 = _possibleConstructorReturn(this, (InputF.__proto__ || Object.getPrototypeOf(InputF)).call(this, props));

        _this3.state = { scale: "f", temperature: 0 };
        return _this3;
    }

    _createClass(InputF, [{
        key: "render",
        value: function render() {
            return React.createElement("input", { id: "f", value: this.state.temperature, onChange: this.props.handleChangeF });
        }
    }]);

    return InputF;
}(React.Component);

var Verdict = function (_React$Component4) {
    _inherits(Verdict, _React$Component4);

    function Verdict(props) {
        _classCallCheck(this, Verdict);

        var _this4 = _possibleConstructorReturn(this, (Verdict.__proto__ || Object.getPrototypeOf(Verdict)).call(this, props));

        _this4.state = {
            temperature: _this4.props.temperature
        };
        return _this4;
    }

    _createClass(Verdict, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.temperature > 100 ? "water will boil" : "water will not boil"
            );
        }
    }]);

    return Verdict;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.querySelector("#themometer"));