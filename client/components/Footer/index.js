import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { alertInteraction, sendMessage, getFooterCoords } from '../../store';

class Footer extends React.Component {
  state = {
    email: '',
    name: '',
    message: '',
    subject: '',
    phone: '',
    all: false,
    error: {},
    sent: false
  };

  footer = React.createRef();

  componentDidMount() {

    setTimeout(() => {
      this.props.getFooterCoords(
        this.footer.current && this.footer.current.offsetTop
      );
    }, 500);
  }
  componentDidUpdate() {

    this.footer.current &&
      this.footer.current.offsetTop !== this.props.footerCoords &&
      this.props.getFooterCoords(this.footer.current.offsetTop);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.sendMessage(this.state);
    this.setState({
      error: {},
      sent: true,
      email: '',
      name: '',
      message: '',
      subject: '',
      phone: ''
    });
  };

  render() {
    const { sent, phone, email, subject, message, name } = this.state;
    return (
      <footer ref={this.footer} id="footer">
        <form
          className="footer__contact flex column align-center"
          onSubmit={this.handleSubmit}
        >
          <div className=" flex row align-center">
            <h4 className="headline-4 color-secondary">How Can We Help?</h4>
          </div>
          <div className="flex row wrap align-center justify-center">
            <TextField
              placeholder="Name"
              name="name"
              required
              variant="outlined"
              onChange={this.handleChange}
              className="footer__contact__textfield"
              value={name}
            />
            <TextField
              placeholder="Email"
              name="email"
              required
              variant="outlined"
              onChange={this.handleChange}
              className="footer__contact__textfield"
              value={email}
            />
            <TextField
              placeholder="Phone"
              name="phone"
              required
              variant="outlined"
              onChange={this.handleChange}
              className="footer__contact__textfield"
              value={phone}
            />
            <TextField
              placeholder="Subject"
              name="subject"
              required
              variant="outlined"
              onChange={this.handleChange}
              className="footer__contact__textfield"
              value={subject}
            />
          </div>
          <TextField
            placeholder="Please leave your message here."
            name="message"
            multiline
            required
            variant="outlined"
            onChange={this.handleChange}
            className="footer__contact__textfield footer__textarea"
            value={message}
          />
          {sent && (
            <h6 className="headline-5 color-white">
              Your Message has been Sent.
            </h6>
          )}
          <button
            className="button background-white color-primary"
            type="submit"
          >
            Send
          </button>
        </form>

        <div className="footer__inner flex row wrap items-start justify-center align-center my-10px">
          <div className="w-325px column wrap align-center text-center flex margin-10px">
            <p className="body-1" style={{ color: 'gold' }}>
              Richard P. Hayes, Sr.
            </p>
            <p className="body-2 footer-striped">Principal</p>
            <p className="body-1" style={{ color: 'gold' }}>
              Richard P. Hayes, Jr.{' '}
            </p>
            <p className="body-2 footer-striped">Principal</p>
          </div>

          <div className="w-325px flex column wrap align-center">
            <h1 id="info-block">Hayes Developers</h1>

            <div className=" margin-10px flex column wrap text-center">
              <p className="headline-5">1471 Pleasant Valley Road</p>
              <p className="body-1"> Manchester, CT 06042</p>
            </div>
            <div className="flex column wrap margin-10px text-center">
              <p>Ph: (860) 646-0131</p> <p>Fax: (860) 644-9073</p>
            </div>
          </div>
          <div className="w-325px  margin-10px column wrap flex align-center text-center">
            <p className="body-1" style={{ color: 'gold' }}>
              Sandra L. Wilkins
            </p>
            <p className="body-2 footer-striped">Property Manager</p>
            <p className="body-1" style={{ color: 'gold' }}>
              Bonnie L. Trimble-Cushman
            </p>
            <p className="body-2 footer-striped">Office Manager</p>
          </div>
        </div>

        <div className="flex column wrap align-center justify-center">
          <div className="flex row wrap align-center justify-center">
            <Link to="/privacy" className="body-1 link color-secondary py-5px">
              Privacy
            </Link>
            <Link to="/about" className="body-1 link color-secondary py-5px">
              About
            </Link>
            <Link
              to="/hayes-team"
              className="body-1 link color-secondary py-5px"
            >
              The Hayes Team
            </Link>
            <Link
              to="/property-services"
              className="body-1 link color-secondary py-5px"
            >
              Property Management
            </Link>
          </div>
          <p className="body-2 text-center">
            © 2015 Copyright Hayes Developers. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  alertInteraction: () => dispatch(alertInteraction(false)),
  sendMessage: message => dispatch(sendMessage(message)),
  getFooterCoords: footerCoords => dispatch(getFooterCoords(footerCoords))
});

const mapStateToProps = state => ({
  phone: state.init.phone,
  company: state.init.company,
  footerCoords: state.util.footerCoords
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer))
