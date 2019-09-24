import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Block,
  WindoW,
  GalleryBlock,
  Flex,
  Divider,
  Animator
} from '../sub-components/containers';
import { Video, Fab, List, Table, Carousel, Slide } from '../sub-components';

class Home extends Component {
  state = {
    scrolled: 0
  };
  aboutBlock = React.createRef();
  charity1 = React.createRef();
  charity2 = React.createRef();
  charity3 = React.createRef();
  charity4 = React.createRef();
  sportingBlock = React.createRef();
  sportingBlock2 = React.createRef();
  carousel = React.createRef();

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    this.setState({ scrolled: window.pageYOffset });
  };

  render() {
    const {
      charity1,
      charity2,
      charity3,
      charity4,
      sportingBlock,
      sportingBlock2,
      carousel,
      state,
      props,
      aboutBlock
    } = this;
    const { charities, sporting } = props;
    const { scrolled } = state;

    return (
      <div style={{ overflowX: 'hidden' }} className="flex column align-center">
        <WindoW video>
          <Video video="https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/Hayes%20Developers.mp4?alt=media&token=6a7ba0b0-fee5-4cd7-ab8a-767d9c4aeaa4" />
        </WindoW>
        <Animator
          inRef={aboutBlock}
          scrolled={scrolled}
          animation="a-wrapper--opacity"
          maxHeight="maxh-500px"
          maxWidth="maxw-800px"
        >
          <Flex column width="w-90">
            <Block
              column
              type="info-card"
              backgroundColor="background-secondary"
              color="color-primary"
            >
              <p className="body-1 p-20px">
                <i>
                  Since 1974, Hayes Developers has been a leader in real estate
                  development, leasing and property management of retail
                  shopping centers. Our longevity and integrity are why many
                  companies in the New England area trust the Hayes Team with
                  their development needs.
                </i>
              </p>

              <Link to={{ pathname: '/hayes-team' }} className="headliner-4">
                <h4 className="headline-4 color-primary">
                  Read More about the Hayes Team
                </h4>
              </Link>
            </Block>
          </Flex>
        </Animator>
        <Divider
          border
          backgroundColor="background-primary"
          color="color-secondary"
        >
          <h1 className="headline-4">Community</h1>
        </Divider>
        <WindoW
          column
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/storrs-rd-plaza%2FDSC_1935%20copy.JPG?alt=media&token=19cc7e5e-cc51-4cfd-8fc0-92dbbaee06ab"
        >
          <Flex row justify="justify-space-evenly" width="w-90">
            <Animator
              inRef={charity1}
              scrolled={scrolled}
              animation="a-wrapper--left"
              maxHeight="maxh-550px"
              maxWidth="maxw-450px"
            >
              <Block column type="info-card" full>
                <h4 className="headline-4 color-secondary p-20px">Charities</h4>
                <p className="body-1 color-secondary p-20px">
                  Hayes Developers has long been active in the International
                  Council of Shopping Centers (ICSC) and ReCON. We are also
                  strong supporters and sponsors of our community, non-profit
                  organizations and school systems. The following are some of
                  the organizations we are proud to support:
                </p>
              </Block>
            </Animator>
            <Animator
              inRef={charity2}
              scrolled={scrolled}
              animation="a-wrapper--right"
              maxHeight="maxh-550px"
              maxWidth="maxw-450px"
            >
              <Block
                column
                type="info-card"
                backgroundColor="background-primary"
                full
              >
                <List small list={charities.slice(0, 15)} />
              </Block>
            </Animator>
          </Flex>
          <Flex row justify="justify-space-evenly" width="w-90">
            <Animator
              inRef={charity3}
              scrolled={scrolled}
              animation="a-wrapper--left"
              maxHeight="maxh-550px"
              maxWidth="maxw-400px"
            >
              <Block
                column
                type="info-card"
                backgroundColor="background-primary"
                full
              >
                <List small list={charities.slice(15, 29)} />
              </Block>
            </Animator>
            <Animator
              inRef={charity4}
              scrolled={scrolled}
              animation="a-wrapper--right"
              maxHeight="maxh-550px"
              maxWidth="maxw-400px"
            >
              <Block
                column
                type="info-card"
                backgroundColor="background-primary"
                full
              >
                <List small list={charities.slice(29)} />
              </Block>
            </Animator>
          </Flex>
        </WindoW>
        <Divider
          border
          backgroundColor="background-primary"
          color="color-secondary"
        >
          <h1 className="headline-4">Sporting Events</h1>
        </Divider>
        <WindoW backgroundUrl="https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/berlin-center-plaza%2FIMG_5796.JPG?alt=media&token=54ac8ffb-17a2-4730-b2e5-0a3e39a2bd53">
          <Flex row justify="justify-space-evenly" width="w-90">
            <Animator
              inRef={sportingBlock}
              scrolled={scrolled}
              animation="a-wrapper--left"
              maxHeight="maxh-450px"
              maxWidth="maxw-450px"
            >
              <Block column type="info-card" full>
                <h4 className="headline-4 color-secondary p-20px">
                  Sporting Events Sponsorship
                </h4>
                <p className="body-1 color-secondary p-20px">
                  In addition, we sponsor many golf and tennis outings in
                  conjunction with our retailers to help raise money and
                  awareness.
                </p>
              </Block>
            </Animator>
            <Animator
              inRef={sportingBlock2}
              scrolled={scrolled}
              animation="a-wrapper--right"
              maxHeight="maxh-450px"
              maxWidth="maxw-450px"
            >
              <Block type="info-card" column full>
                <List alternating list={sporting} />
              </Block>
            </Animator>
          </Flex>
        </WindoW>
        <Divider
          border
          backgroundColor="background-primary"
          color="color-secondary"
        >
          <h1 className="headline-4">Awards</h1>
        </Divider>

        <WindoW
          column={true}
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/newington-cvs%2FIMG_5701.JPG?alt=media&token=2cad2089-cd56-4c53-b2b0-5cf4f1aaa879"
        >
          <Slide
            items={[
              'https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/awards%2FGeneralAssembly1999.jpg?alt=media&token=4b1672b6-3c20-4478-bc86-40188c4d2ecd',
              'https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/awards%2FGroundbreakingFennRdNewington1992.jpg?alt=media&token=30b57496-f2cf-447c-b4f0-add9c3585caf',
              'https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/awards%2FECHS1986.jpg?alt=media&token=289c1ccf-a773-4d2b-8d48-efd2e0ec67f8',
              'https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/awards%2FNewingtonBeautificationAward1999.jpg?alt=media&token=c1aefb84-224c-4eec-865c-c9618b051ca2',
              'https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/awards%2FNewingtonTownCouncil1999.jpg?alt=media&token=abfa7003-daee-4273-9f5a-f5e8c843094e'
            ]}
          />
          <Divider color="color-white" backgroundColor="background-primary">
            <h4 className="headline-4">
              We Have Also Developed for the Following Companies
            </h4>
          </Divider>
          <Slide
            items={[
              'https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/3rdPartyLogos%2Fwendies.png?alt=media&token=4dae5834-46e2-4341-b5e2-7ad31602b45c',
              'https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/3rdPartyLogos%2Fmcdonalds.jpeg?alt=media&token=df0c3768-8a0d-4f36-b3fb-b4be0a3dc4a5',
              'https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/3rdPartyLogos%2Fxtra.jpeg?alt=media&token=d68e925d-3511-472f-876c-55810c9a6854',
              'https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/3rdPartyLogos%2Fdownload%20(2).png?alt=media&token=8ced3483-8183-4730-934c-d8ffd2ac230d'
            ]}
          />
        </WindoW>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  charities: state.init.charities,
  sporting: state.init.sporting
});

export default connect(mapStateToProps)(Home);
