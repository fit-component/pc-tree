'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeNode = function (_React$Component) {
    _inherits(TreeNode, _React$Component);

    function TreeNode(props) {
        _classCallCheck(this, TreeNode);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TreeNode).call(this, props));

        _this.state = {
            showChildren: _this.props.defaultExpendAll || _this.props.showChildren
        };
        return _this;
    }

    _createClass(TreeNode, [{
        key: 'handleTitleClick',
        value: function handleTitleClick() {
            this.setState({
                showChildren: !this.state.showChildren
            });
            this.props.onClick(this.props.title);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var children = _props.children;
            var defaultExpendAll = _props.defaultExpendAll;
            var title = _props.title;
            var render = _props.render;

            var others = _objectWithoutProperties(_props, ['className', 'children', 'defaultExpendAll', 'title', 'render']);

            var classes = (0, _classnames2.default)(_defineProperty({
                'lib-pc-tree-lib-tree-node': true
            }, className, className));

            var childrenStyle = {
                'display': this.state.showChildren ? 'block' : null
            };

            var titleCaretClass = (0, _classnames2.default)({
                'fa': true,
                'caret-left': true,
                'fa-caret-right': !this.state.showChildren,
                'fa-caret-down': this.state.showChildren
            });

            var Children = null;
            if (this.props) {
                Children = _react2.default.Children.map(children, function (item) {
                    if (item) {
                        return _react2.default.cloneElement(item, {
                            defaultExpendAll: defaultExpendAll
                        });
                    }
                });
            }

            return _react2.default.createElement(
                'div',
                _extends({}, others, { className: classes }),
                _react2.default.createElement(
                    'div',
                    { onClick: this.handleTitleClick.bind(this),
                        className: 'title' },
                    _react2.default.Children.count(children) > 0 ? _react2.default.createElement(
                        'div',
                        { className: 'title-caret' },
                        _react2.default.createElement('i', { className: titleCaretClass })
                    ) : _react2.default.createElement('div', { className: 'empty-caret' }),
                    title || render()
                ),
                _react2.default.createElement(
                    'div',
                    { style: childrenStyle,
                        className: 'children' },
                    Children ? Children : null
                )
            );
        }
    }]);

    return TreeNode;
}(_react2.default.Component);

exports.default = TreeNode;


TreeNode.defaultProps = {
    title: '',
    showChildren: false,
    defaultExpendAll: false,
    render: function render() {},
    onClick: function onClick(title) {}
};