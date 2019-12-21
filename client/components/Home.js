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
  charityRef = React.createRef();
  sportingRef = React.createRef();
  hayesTeamRef = React.createRef();
  propManRef = React.createRef();

  componentDidMount() {
    if (this.props.location.state) {
      this.handleScrollTo(this.props.location.state.ref);
    }
    const browser = navigator.userAgent;
    if (browser.match(/Trident\/7\./) || browser.match('Edge/')) {

      document.body.addEventListener('mousewheel', function() {
        event.preventDefault();
        var wd = event.wheelDelta;
        var csp = window.pageYOffset;
        window.scrollTo(0, csp - wd);
      });
    }
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.state) {
      if (
        prevProps.location.state &&
        prevProps.location.state.ref !== this.props.location.state.ref
      ) {
        this.handleScrollTo(this.props.location.state.ref);
      } else if (!prevProps.location) {
        this.handleScrollTo(this.props.location.state.ref);
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    event.preventDefault();
    this.setState({ scrolled: window.pageYOffset });
  };

  handleScrollTo = ref => {

    const target = this[ref].current.offsetTop;
    window.scroll(null, target - 70);
    this.setState({ scrolled: target });
  };

  render() {
    const {
      sportingRef,
      charityRef,
      hayesTeamRef,
      propManRef,
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
          forRef={aboutBlock}
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
            </Block>
          </Flex>
        </Animator>
        <Divider
          border
          forwardedRef={hayesTeamRef}
          backgroundColor="background-primary"
          color="color-secondary"
        >
          <h1 className="headline-4">The Hayes Team</h1>
        </Divider>
        <WindoW
          column
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/storrs-rd-plaza%2F302.JPG?alt=media&token=e10ea0cb-6615-478b-a43e-21a45138081f"
        >
          <hr />
          {/* <img src="https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/Hayes-Corp_Building_for_web.jpg?alt=media&token=f07d2d37-353d-4f0a-88f8-46edcf7eb095" /> */}
          <Flex width="w-90" column>
            <Block
              column
              type="info-card"
              maxHeight="maxh-600px"
              maxWidth="maxw-1000px"
            >
              <p className="body-1 color-secondary p-20px">
                <i>
                  Hayes Developers is a family owned and operated business with
                  over 50 years’ experience in commercial real estate
                  development, leasing and management. We have built a
                  reputation of integrity, reliability and experience in the
                  community. We are hands-on owners who boast a personal
                  relationship with most of our tenants, from big box retailers
                  to smaller mom-and-pop stores. We understand our customers’
                  needs and work hard to address them at all stages of
                  development.
                </i>
              </p>
            </Block>

            <hr />

            <Block
              column
              type="info-card"
              maxHeight="maxh-550px"
              maxWidth="maxw-600px"
              full
            >
              <h4 className="headline-4 color-secondary">The Hayes Company</h4>
              <p className="body-1 color-secondary p-20px">
                Richard P. Hayes, Sr. began his career in 1960 selling real
                estate in Connecticut. The Hayes Company was formed and
                specialized in residential property for 10 years and then became
                a modular home dealer and developed several subdivisions. In
                1970 forward, he devoted his attention to land sales, commercial
                and industrial brokerage.
              </p>
            </Block>
            <Block
              column
              type="info-card"
              maxHeight="maxh-550px"
              maxWidth="maxw-600px"
              full
            >
              <h4 className="headline-4 color-secondary ">Hayes Properties</h4>
              <p className="body-1 color-secondary p-20px">
                Richard P. Hayes, Jr. joined the partnership in 1987 and
                contributed to the development of several centers, as well as
                his own projects under Hayes Properties.
              </p>
            </Block>

            <Block
              column
              type="info-card"
              maxHeight="maxh-1150px"
              maxWidth="maxw-600px"
            >
              <h4 className="headline-4 color-secondary">Hayes-Kaufman</h4>
              <p className="body-1 color-secondary">
                In 1986, Richard Hayes joined with Mike Kaufman of
                Basser-Kaufman located in Long Island, New York and began a new
                venture to develop grocery anchored shopping centers in Central
                Connecticut. One project led to another and over the next 20
                years they completed 7 shopping centers under the name of
                Hayes-Kaufman. This venture with Mr. Kaufman and associates
                proved to be a very successful partnership. Today, Rich Jr.,
                along with Steve Kaufman and Marc Kemp continue to acquire and
                develop various retail properties. They are involved in all
                aspects from initial site assessments to development, leasing,
                and management.
              </p>
            </Block>
          </Flex>
        </WindoW>
        <Divider
          border
          backgroundColor="background-primary"
          color="color-secondary"
          forwardedRef={charityRef}
        >
          <h1 className="headline-4">Community</h1>
        </Divider>
        <WindoW
          column
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/storrs-rd-plaza%2FDSC_1935%20copy.JPG?alt=media&token=19cc7e5e-cc51-4cfd-8fc0-92dbbaee06ab"
        >
          <Flex row justify="justify-space-evenly" width="w-90">
            <Animator
              aliasRef={charityRef}
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
              aliasRef={charityRef}
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
              aliasRef={charityRef}
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
              aliasRef={charityRef}
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
          forwardedRef={sportingRef}
          border
          backgroundColor="background-primary"
          color="color-secondary"
        >
          <h1 className="headline-4">Sporting Events</h1>
        </Divider>
        <WindoW backgroundUrl="https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/berlin-center-plaza%2FIMG_5796.JPG?alt=media&token=54ac8ffb-17a2-4730-b2e5-0a3e39a2bd53">
          <Flex row justify="justify-space-evenly" width="w-90">
            <Animator
              aliasRef={sportingRef}
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
              aliasRef={sportingRef}
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
            decorated
            height="h-350px"
            items={[
              {
                text: 'Connecticut General Assembly',
                img:
                  'https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/awards%2FGeneralAssembly1999.jpg?alt=media&token=4b1672b6-3c20-4478-bc86-40188c4d2ecd'
              },
              {
                text: 'Ground Breaking, Fenn Road Plaza',
                img:
                  'https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/awards%2FGroundbreakingFennRdNewington1992.jpg?alt=media&token=30b57496-f2cf-447c-b4f0-add9c3585caf'
              },
              {
                text: 'East Catholic High School',
                img:
                  'https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/awards%2FECHS1986.jpg?alt=media&token=289c1ccf-a773-4d2b-8d48-efd2e0ec67f8'
              },
              {
                text: 'Newington Chambeer of Commerce, Beautification Award',
                img:
                  'https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/awards%2FNewingtonBeautificationAward1999.jpg?alt=media&token=c1aefb84-224c-4eec-865c-c9618b051ca2'
              },
              {
                text: 'Newington Chambeer of Commerce, Quality of Life',
                img:
                  'https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/awards%2FNewingtonTownCouncil1999.jpg?alt=media&token=abfa7003-daee-4273-9f5a-f5e8c843094e'
              }
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
        <Divider
          forwardedRef={propManRef}
          border
          backgroundColor="background-primary"
          color="color-secondary"
        >
          <h1 className="headline-4">Property Management Services</h1>
        </Divider>
        <WindoW
          column
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/fenn-rd-plaza%2FDSC_2043%20copy.JPG?alt=media&token=98340314-70a8-4471-8b25-bea88128564c"
        >
          <hr />
          <Flex width="w-90" column>
            <Block
              column
              type="info-card"
              maxHeight="maxh-700px"
              maxWidth="maxw-1000px"
              color="color-secondary"
            >
              <p className="body-1">
                As a fully integrated real estate development firm, Hayes
                Developers does it all from the ground up. From land acquisition
                and approvals to construction, leasing, and property management,
                we are involved in our properties every step of the way. We cut
                through obstacles and get the job done right and on schedule. We
                offer the knowledge and expertise of a large, established firm,
                plus the personal attention of a family-owned business.
              </p>
            </Block>
            <br />
            <Block
              column
              type="info-card"
              maxHeight="maxh-700px"
              maxWidth="maxw-1000px"
              color="color-secondary"
            >
              <p className="body-1 ">
                Tenants can call our office and get personalized service, and,
                in most instances, speak directly to the Principals of the
                company. Our tenants and prospects are handled with courteous,
                reliable, fair and honest service. You will always speak to a
                person, not a machine. Assisting our tenants is our main goal
                with same day solutions and consistent communication with all
                parties involved. We pride ourselves on being detail-oriented
                and developing good relationships.
              </p>
            </Block>
            <br />
            <Block
              column
              type="info-card"
              maxHeight="maxh-700px"
              maxWidth="maxw-1000px"
              color="color-secondary"
            >
              <p className="body-1 ">
                Prospective tenants interested in available properties will
                receive information the same day of inquiry and those interested
                in viewing a property will be able to schedule an appointment at
                their convenience. Our in-house Property Manager is available to
                our tenants and prospects 7 days a week.
              </p>
            </Block>
          </Flex>
          <hr />

          <Flex column width="w-90">
            <Block
              column
              type="info-card"
              maxHeight="maxh-400px"
              maxWidth="maxw-400px"
              color="color-secondary"
            >
              <h6 className="headline-6 text-center">
                Property Management Services
              </h6>
              <div className="w-100 flex column align-center">
                <p className="body-2 text-center">1471 Pleasant Valley Road </p>
                <p className="body-2 text-center margin-0 padding-0">
                  Manchester, CT 06042
                </p>
              </div>
              <div className="w-100 flex column align-center">
                <p className="body-2 text-center">Ph: (860) 646-0131 </p>
                <p className="body-2 text-center margin-0 padding-0">
                  Fax: (860) 644-9073
                </p>
              </div>
              <p className="body-1 text-center">
                For more information about our Property Management services,
                please inquire below.
              </p>
            </Block>
          </Flex>
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
