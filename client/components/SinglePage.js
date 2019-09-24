import React, { Component } from 'react';
import { WindoW, Divider, Flex, Block } from '../sub-components/containers';
import {
  Loader,
  Carousel,
  List,
  MapContainer,
  Image,
  Textfield
} from '../sub-components';

import { connect } from 'react-redux';
import { alertInteraction, sendMessage } from '../store';
import HoldingForm from './HoldingForm';

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


  selectImage = index => {
    const { holding } = this.state;
    this.props.alertInteraction(
      true,
      <Image items={holding.imageArr} index={index} />
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
        <Flex column width="w-90">
          <Carousel
            primary={holding.name}
            items={holding.imageArr}
            maxWidth="maxw-900px"
            backgroundColor="background-primary"
            height="h-500px"
          />
        </Flex>
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
                    <HoldingForm holding={holding} />
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

            <div className="single-view-map ">
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
