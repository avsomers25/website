import './ResumeItem.css';


import React from 'react';


function ResumeItem({Info}) {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: 20, border: "1px"}}>
            <div>
                <h2>{Info.jobtitle}</h2>
                <p>{Info.daterange}</p>
            </div>
            <div>
                <h2><u>{Info.company}</u></h2>
                <p>{Info.desc}</p>
            </div>
      </div>
    );
  }
  
  export default ResumeItem;