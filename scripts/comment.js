var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comment = function (_React$Component) {
    _inherits(Comment, _React$Component);

    function Comment(props) {
        _classCallCheck(this, Comment);

        var _this = _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).call(this, props));

        _this.refresh = _this.refresh.bind(_this);
        _this.stopCycle = _this.stopCycle.bind(_this);
        _this.startCycle = _this.startCycle.bind(_this);
        _this.state = { message: _this.props.message,
            i: 0,
            isFocused: false
        };
        _this.cycle = setInterval(function () {
            _this.refresh();
        }, 1000);

        return _this;
    }

    _createClass(Comment, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { onFocus: this.startCycle, onBlur: this.stopCycle, tabIndex: "100" },
                this.state.message,
                React.createElement(
                    "button",
                    { onClick: this.refresh },
                    "say hi"
                ),
                React.createElement("input", null)
            );
        }
    }, {
        key: "startCycle",
        value: function startCycle() {
            if (this.state.isFocused) {
                return;
            }
            this.state.isFocused = true;
        }
    }, {
        key: "stopCycle",
        value: function stopCycle() {
            console.log("stop cycle called");
            clearInterval(this.cycle);
        }
    }, {
        key: "refresh",
        value: function refresh() {
            this.state.i++;
            this.setState({
                message: this.state.i
            });
        }
    }]);

    return Comment;
}(React.Component);

ReactDOM.render(React.createElement(Comment, { refresh: this.refresh, message: "excalibar" }), document.querySelector("#commentTest"));