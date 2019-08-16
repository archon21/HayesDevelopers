import React from 'react';
import { withRouter } from 'react-router-dom';
import { Block } from './containers';

const HoldingCard = props => {
  const { holding, page, pathname, index, display, holdingId } = props;
  return (
    <div
      className="holding__card flex column align-center"
      onClick={() =>
        props.history.push({
          pathname: `/holdings/${pathname}/${holdingId}`,
          state: { holding }
        })
      }
      // backgroundColor="background-primary"
    >
      <img className="holding__card__image" src={holding.image} />
      <div className="holding__card__info">
        <h6 className="headline-5 color-white">{holding.name}</h6>
        <p
          className={`${
            page !== 'Leasing Opportunities' ? 'headline-6 color-white' : 'body-2 color-white'
          } text-center`}
        >
          {holding.location}
        </p>
        {page === 'Developments' &&
          (holding.leasable ? (
            <p className="body-2 text-center color-white">{holding.availabilities}</p>
          ) : (
            <p className="body-2 text-center color-white">More Information Coming Soon.</p>
          ))}
        {page === 'Leasing Opportunities' &&
          (holding.leasable ? (
            <h6 className="headline-6 text-center color-white">
              <strong>Availabilty</strong> {holding.availabilities}.
            </h6>
          ) : (
            <div />
          ))}
        {page === 'All Properties' &&
          (holding.leasable ? (
            <p className="body-2 text-center color-white">
              {holding.name} has leasing opportunities.
            </p>
          ) : (
            <div />
          ))}
      </div>
    </div>
  );
};

export default withRouter(HoldingCard);
