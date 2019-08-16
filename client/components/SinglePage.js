import React, { Component } from 'react';
import { WindoW, Divider, Flex, Block } from '../sub-components/containers';
import {
  Loader,
  Carousel,
  List,
  MapContainer,
  Textfield
} from '../sub-components';

import { connect } from 'react-redux';
import { alertInteraction, sendMessage } from '../store';

class SinglePage extends Component {
  state = {
    holding: null,
    image: '',
    email: ''
  };
  async componentDidMount() {
    if (this.props.location.state) {
      this.setState({ holding: this.props.location.state.holding });
    } else {
      const { pathname } = this.props.location;
      const targetArr = pathname.split('/');
      const target = targetArr[targetArr.length - 1];
      const type =
        targetArr[targetArr.length - 2] === 'development'
          ? 'developments'
          : 'properties';


      const holding = this.props.holdings[type][target];

      this.setState({ holding });
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSend = () => {
    const { email, holding } = this.state;
    this.props.sendMessage({
      email,
      name: 'None',
      message: `Interest in ${
        holding.name
      } from ${email}: Quick send from actual property page.`,
      phone: 'none',
      subject: 'Quick contact'
    });
    this.props.alertInteraction(false);
  };

  nextitem = () => {
    const { image, holding } = this.state;
    let newImage = 0;
    if (image === holding.imageArr.length - 1) {
      newImage = 0;
    } else {
      newImage = image + 1;
    }
    this.props.alertInteraction(
      true,
      <div className="w-100 h-100 flex column align-center justify-center relative">
        <img
          className="w-100 h-100 object-contain background-primary"
          src={holding.imageArr[newImage]}
          onClick={this.nextitem}
        />
          <button onClick={() => this.props.alertInteraction(false)}>
          <i className="single-popup-icon material-icons color-white">close</i>
          </button>
        <div onClick={this.previtem} className="carosuel-right-button">
          <span />
          <span />
        </div>
        <div onClick={this.nextitem} className="carosuel-left-button">
          <span />
          <span />
        </div>
      </div>
    );
    this.setState({ image: newImage });
  };

  previtem = () => {
    const { image, holding } = this.state;
    let newImage = 0;
    if (image === 0) {
      newImage = holding.imageArr.length - 1;
    } else {
      newImage = image - 1;
    }
    this.props.alertInteraction(
      true,
      <div className="w-100 h-100 flex column align-center justify-center relative">
        <img
          className="w-100 h-100 object-contain background-primary"
          src={holding.imageArr[newImage]}
          onClick={this.nextitem}
        />
        <button onClick={() => this.props.alertInteraction(false)}>
          <i className="single-popup-icon material-icons color-white">close</i>
        </button>
        <div onClick={this.previtem} className="carosuel-right-button">
          <span />
          <span />
        </div>
        <div onClick={this.nextitem} className="carosuel-left-button">
          <span />
          <span />
        </div>
      </div>
    );
    this.setState({ image: newImage });
  };

  selectImage = index => {
    const { holding } = this.state;
    this.props.alertInteraction(
      true,
      <div className="w-100 h-100 flex column align-center justify-center relative">
        <img
          className="w-100 h-100 object-contain background-primary"
          src={holding.imageArr[index]}
          onClick={this.nextitem}
        />
          <button onClick={() => this.props.alertInteraction(false)}>
          <i className="single-popup-icon material-icons color-white">close</i>
          </button>
        <div onClick={this.previtem} className="carosuel-right-button">
          <span />
          <span />
        </div>
        <div onClick={this.nextitem} className="carosuel-left-button">
          <span />
          <span />
        </div>
      </div>
    );
    this.setState({ image: index });
  };
  render() {
    const { holding, image } = this.state;
    return holding ? (
      <div>
        {/* <WindoW
          align="align-end"
        backgroundUrl={holding.image}>
        </WindoW> */}
        <Divider
          border
          backgroundColor="background-primary"
          color="color-secondary"
        >
          <h1 className="headline-4">{holding.name}</h1>
        </Divider>
        <hr />
        <WindoW column background="background-secondary">
          <Carousel
            primary={holding.name}
            items={holding.imageArr}
            maxHeight="maxh-450px"
            maxWidth="maxw-900px"
            backgroundColor="background-primary"
          />
          <Flex column width="w-auto">
            <Flex maxWidth="maxw-100" style={{ overflowY: 'hidden' }}>
              {holding.imageArr.map((image, index) => {
                return (
                  <div
                    className="flex column align-center justify-center carousel__image-background"
                    onClick={() => this.selectImage(index)}
                  >
                    <img className="carousel__image" src={image} />
                  </div>
                );
              })}
            </Flex>

            <Flex row>
              {holding.pdfs ? (
                <a
                  // to={{ pathname: '/Templates', state: { page, holding } }}
                  className="button large"
                  href={holding.pdfs[0]}
                  target="_blank"
                >
                  Open Site Plan
                </a>
              ) : (
                <div />
              )}
              <button
                onClick={() =>
                  this.props.alertInteraction(
                    true,
                    <Block
                      column
                      type="info-card"
                      backgroundColor="background-secondary"
                      color="color-primary"
                      maxHeight="maxh-450px"
                      maxWidth="maxw-450px"
                    >
                      <div className="flex row align-center justify-center">
                        <button
                          type="button"
                          onClick={() => this.props.alertInteraction(false)}
                          className="small-icon rounded material-icons"
                        >
                          close
                        </button>
                        <h6 className="headline-4 color-primary">
                          Just add your Email.
                        </h6>
                      </div>
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="textfield"
                        handleChange={this.handleChange}
                      />
                      <button
                        onClick={this.handleSend}
                        className="button"
                        type="submit"
                      >
                        Send
                      </button>
                    </Block>
                  )
                }
                className="button large"
              >
                Interested In {holding.name}
              </button>
            </Flex>
          </Flex>
        </WindoW>
        <hr />

        <WindoW background="background-primary">
          <div className="flex row wrap w-90 background-primary justify-space-evenly align-center">
            <Block
              column
              type="info-card"
              backgroundColor="background-secondary"
              color="color-primary"
              maxHeight="maxh-450px"
              maxWidth="maxw-450px"
              margin="m-30px"
            >
              <div className="flex column" />
              {holding.location && (
                <p className="body-1 p-20px">
                  <strong>LOCATION </strong>{' '}
                  <span className="body-2">{holding.location}</span>
                </p>
              )}
              {holding.availabilities && (
                <p className="body-1 p-20px">
                  <strong>AVAILABILITIES </strong>{' '}
                  <span className="body-2">{holding.availabilities}</span>
                </p>
              )}
              {holding.access && (
                <p className="body-1 p-20px">
                  <strong>ACCESSIBILITY </strong>{' '}
                  <span className="body-2">{holding.access}</span>
                </p>
              )}
              {holding.parking && (
                <p className="body-1 p-20px">
                  <strong>PARKING </strong>{' '}
                  <span className="body-2">{holding.parking}</span>
                </p>
              )}
              {holding.gla && (
                <p className="body-1 p-20px">
                  <strong>GLA </strong>{' '}
                  <span className="body-2">{holding.gla}</span>
                </p>
              )}
            </Block>
            {holding.tenantsArr && (
              <Block
                column
                type="info-card"
                backgroundColor="background-secondary"
                color="color-primary"
                maxHeight="maxh-500px"
                maxWidth="maxw-450px"
                margin="m-30px"
              >
                <h4 className="headline-4 p-20px">Tenants</h4>
                <List color="color-primary" list={holding.tenantsArr} />
              </Block>
            )}

            <div className="single-view-map m-30px">
              <MapContainer
                coords={holding.coords}
                name={holding.name}
                availabilities={holding.availabilities}
              />
            </div>

            {holding.description && (
              <Block
                column
                type="info-card"
                backgroundColor="background-secondary"
                color="color-primary"
                maxHeight="maxh-600px"
                maxWidth="maxw-450px"
                margin="m-30px"
              >
                <h4 className="headline-4  p-20px">Description</h4>
                <p className="body-1">{holding.description}</p>
              </Block>
            )}
          </div>
        </WindoW>
      </div>
    ) : (
      <Loader />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  alertInteraction: (status, template) =>
    dispatch(alertInteraction(status, template)),
  sendMessage: message => dispatch(sendMessage(message))
});

const mapStateToProps = state => ({
  holdings: state.firebase.holdings
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePage);
