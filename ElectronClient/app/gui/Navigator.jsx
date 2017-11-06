const React = require('react'); const Component = React.Component;
const { connect } = require('react-redux');

class NavigatorComponent extends Component {

	render() {
		if (!this.props.route) throw new Error('Route must not be null');

		const route = this.props.route;
		const Screen = this.props.screens[route.routeName].screen;

		const screenStyle = {
			width: this.props.style.width,
			height: this.props.style.height,
		};

		return (
			<div style={this.props.style}>
				<Screen style={screenStyle}/>
			</div>
		);
	}

}

const Navigator = connect(
	(state) => {
		return {
			route: state.route,
		};
	}
)(NavigatorComponent)

module.exports = { Navigator };