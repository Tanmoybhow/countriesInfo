import React from "react";
import "./shimmerEffectDetails.css";
const detailsShimmer = () => {
  return (
    <main>
      <div className="container">
        <div className="main-content shimmer-details-main">
          <div>
            <div className="country-img shimmer-img"></div>
            <div className="country-info shimmer-info">
                <div className="h3"></div>
                <div className="p"></div>
                <div className="p"></div>
                <div className="p"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default detailsShimmer;
