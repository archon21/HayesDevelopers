import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WindoW, Divider, Block, Flex } from '../sub-components/containers';
import { Video, HoldingCard, Loader } from '../sub-components';

import { db } from '../utilities/firebase';

const citys = [
  'East Hartford',
  'Manchester',
  'Glastonbury',
  'Newington',
  'Vernon',
  'Mansfield',
  'Plainville',
  'Springfield',
  'Berlin'
];

class Holdings extends Component {
  state = {
    type: '',
    holdingsToRender: [],
    holdingsToRenderInitial: [],
    pathname: '',
    filter: '',
    filterValue: '',
    mounted: false,
    page: '',
    filterStatus: true
  };

  async componentDidMount() {
    await this.mounting();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname.length !== prevProps.location.pathname.length
    ) {
      this.mounting();
    }
  }
  filter = (filterCat, filter) => {
    const { holdingsToRenderInitial } = this.state;
    const filtered = {};
    let counter = 0;
    Object.entries(holdingsToRenderInitial).forEach(data => {
      let key = data[0];
      let holding = data[1];
      if (holding[filterCat] === filter) {
        counter++;
        filtered[key] = holding;
      }
    });
    this.setState({
      holdingsToRender: filtered,
      filter: filterCat,
      filterValue: filter,
      filterStatus: counter > 0
    });
  };

  mounting = () => {
    const { pathname } = this.props.location;
    const { holdings } = this.props;
    const targetArr = pathname.split('/');
    const target = targetArr[targetArr.length - 1];

    if (target === 'opportunities') {
      const leasable = {};
      const reducer = holding => {
        if (holding[1].leasable) leasable[holding[0]] = holding[1];
      };
      Object.entries(holdings.properties).forEach(holding => reducer(holding));
      this.setState({
        filter: '',
        filterStatus: true,
        page: 'Leasing Opportunities',
        holdingsToRender: leasable,
        holdingsToRenderInitial: leasable,
        pathname: target,
        mounted: true
      });
    } else if (target === 'all-properties') {
      this.setState({
        filter: '',
        filterStatus: true,
        page: 'All Properties',
        holdingsToRender: holdings.properties,
        holdingsToRenderInitial: holdings.properties,
        pathname: target,
        mounted: true
      });
    } else {
      this.setState({
        filter: '',
        filterStatus: true,
        page: 'Developments',
        holdingsToRender:
          holdings[target === 'development' ? 'developments' : target],
        holdingsToRenderInitial:
          holdings[target === 'development' ? 'developments' : target],
        pathname: target,
        mounted: true
      });
    }
  };

  render() {
    const dumbArr = [true, false, true, true, true, false];
    const {
      type,
      page,
      holdingsToRender,
      pathname,
      holdingsToRenderInitial,
      holdingsCities,
      filter,
      filterValue,
      mounted,
      filterStatus
    } = this.state;

    return mounted ? (
      <div>
        <Divider
          border
          backgroundColor="background-primary"
          color="color-secondary"
        >
          <Flex column>
            <h1 className="headline-4">{page}</h1>
            <Flex row>
              <div className="menu">
                <button className="button ">
                  {filter === '' ? 'City' : filterValue}
                </button>
                <div className="menu-content">
                  {citys.map(city => {
                    return (
                      <div
                        className="body-1 menu-item"
                        onClick={() => this.filter('city', city)}
                      >
                        {city}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Flex>
          </Flex>
        </Divider>
        <WindoW row background="background-secondary">
          <hr />
          {/* {filter === '' && (
              <div className="flex row wrap w-100 align-center">
                <HoldingCard
                  holding={holdingsToRender[4]}
                  page={page}
                  pathname={pathname}
                  index={4}
                  display="holding__first"
                />
                <div className="holding__second">
                  <HoldingCard
                    holding={holdingsToRender[0]}
                    page={page}
                    pathname={pathname}
                    index={1}
                    display="holding__second__child"
                  />
                  <HoldingCard
                    holding={holdingsToRender[3]}
                    page={page}
                    pathname={pathname}
                    index={3}
                    display="holding__second__child"
                  />

                  <HoldingCard
                    holding={holdingsToRender[2]}
                    page={page}
                    pathname={pathname}
                    index={3}
                    display="holding__second__child"
                  />
                </div>
              </div>
            )} */}
          {filterStatus ? (
            <div className="flex row align-center w-100 h-100 wrap">
              {Object.entries(
                filter === '' ? holdingsToRenderInitial : holdingsToRender
              ).map((entry, index) => {
                const holdingId = entry[0];
                const holding = entry[1];
                return (
                  <HoldingCard
                    key={holdingId}
                    holding={holding}
                    page={page}
                    pathname={pathname}
                    index={index}
                    holdingId={holdingId}
                  />
                );
              })}
            </div>
          ) : (
            <div>
              <h4 className="headline-4">Sorry...</h4>

              <p className="body-1">
                Seems there were no matches to the filter you applied.
              </p>
            </div>
          )}
        </WindoW>
      </div>
    ) : (
      <Loader />
    );
  }
}

const mapStateToProps = state => ({
  holdings: state.firebase.holdings
});

export default connect(mapStateToProps)(Holdings);
