import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Block } from '../sub-components/containers';
import { alertInteraction, sendMessage } from '../store';

class HoldingForm extends Component {
  state = {
    email: ''
  };

  handleChange = event => {
      console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSend = () => {
    const { holding } = this.props;
    const { email } = this.state;
    this.props.sendMessage({
      email,
      name: 'None',
      message: `Interest in ${holding.name} from ${email}: Quick send from actual property page.`,
      phone: 'none',
      subject: 'Quick contact'
    });
    this.props.alertInteraction(false);
  };

  render() {
    const { holding } = this.props;
    return (
      <Block
        column
        type="info-card"
        backgroundColor="background-secondary"
        color="color-primary"
        maxHeight="maxh-450px"
        maxWidth="maxw-450px py-30px"
      >
        <div className="flex row align-center justify-center">
          <button
            style={{background: 'white'}}
            type="button"
            onClick={() => this.props.alertInteraction(false)}
            className="small-icon rounded material-icons"
          >
            close
          </button>
          <h6 className="headline-4 color-primary">Just send us your Email.</h6>
        </div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="textfield"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSend} className="button" type="submit">
          Send
        </button>
      </Block>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  alertInteraction: (status, template) =>
    dispatch(alertInteraction(status, template)),
  sendMessage: message => dispatch(sendMessage(message))
});
export default connect(
  null,
  mapDispatchToProps
)(HoldingForm);
