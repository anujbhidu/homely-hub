import React from 'react'
import PropertyImg from './PropertyImg'
import "../../css/PropertyListing.css"
import PropertyAmenities from './PropertyAmenities'

const PropertyListing = () => {
  return (
      <div className='property-container'>
          <p className='property-header'>Beautifull villa in Goa</p>
          <h6 className='property-location'>
              <span className='material-symbols-outlined'>House</span>
              <span className='location'>ecr, chennai, tamilnadu</span>
          </h6>
          <PropertyImg images={["/assets/property2.webp"]} />
          <div className='middle-container row'>
              <div className='des-and-amenities col-md-8 col-sm-12 col-12'>
                  <h2 className='property-description-header'>Description</h2>
                  <p className='property-description'>This is a simple description of a luxury villa located near the beach.
                      Perfect for families and groups
                      <br/><br/> Max number of guests:6
                  </p>
                  <hr />
                  <PropertyAmenities amenities={["Wifi", "Kitchen", "Pool", "AC"]}/>
              </div>
          </div>
    </div>
  )
}

export default PropertyListing