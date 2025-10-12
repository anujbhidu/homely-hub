import React from 'react'

const PropertyMapInfo = () => {
    return (
      <>
      <div className='map-image-container col-md-6 col-sm-12 col-12'>
          <h2 className='map-header'>Where you'll be</h2>
          <img
          alt='map'
          className='map-image'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs9TTDly1hWpCwyVwWoO-Ael5L1HRh29-Puw&s'/>
        </div>
            <div className='extra-info col-md-6 col-sm-12 col-12 '>
                <h2 className='extra heading'>Extra info</h2>
                <p className='extra-description'>
                    -Check-in time is 1pm & check out time is 10am.
                    Early check-in or late checkout is permitted based on availability and prior intimation.
                    *Based on availability, early checkin is permitted from 10am onwards.
                    If you wish to check-in before 10am, an early checkin fee will be applicable.
                    *Late checkout is permitted based on availability and a fee my be applicable based on checkout time.
                    Please contact host regarding the same.
                </p>
        </div>

    </>
  )
}

export default PropertyMapInfo