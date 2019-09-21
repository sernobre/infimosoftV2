import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import googleplay from '../img/googleplay.png'; 

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section" align="center">
        {/* <section className="section">
           */}
        <h3>{item.title}</h3> 
          <div align="center">
            <div
              style={{
                width: '140px',
               // display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />

           
          {/* {`url(${"/img/googleplay.png"})`}  */}

            </div>
            <div  style={{
                width: '160px',
              display: 'inline-block',
              }}>
            <a href={item.text}> <img src={googleplay} alt="Google Play"  /></a>
            </div>
          </div>
         
          {/* <p>{item.text}</p> */}
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
