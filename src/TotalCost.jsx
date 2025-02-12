import React, { useState, useEffect } from 'react';
import "./TotalCost.css";
const TotalCost = ({ totalCosts = {}, ItemsDisplay }) => {
    const total_amount = totalCosts.venue || 0 + totalCosts.av || 0 + totalCosts.meals || 0 ;
    return (
        <div className="pricing-app">
            <div className="display_box">
                <div className="header">
                    <p className="preheading"><h3>Total cost for the event</h3></p>
                </div>
                <div>
                <h2 id="pre_fee_cost_display" className="price">
    ${total_amount}
</h2>
<div className="render_items">
     <ItemsDisplay />
</div>
                </div>
            </div>
        </div>
    );
};
export default TotalCost;