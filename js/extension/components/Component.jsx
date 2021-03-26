import React, { useEffect } from "react";
import FeatureReports from "./FeatureReports";

const Extension = ({ display, schemasByLayers, currentFeatures, fetchSchemas, addReportViewer }) => {
  useEffect(() => {
    fetchSchemas();
    addReportViewer();
  }, [])
  

  /* TODOs: 
    - select schemas by features
    - insert "formData" into form if already existing for the feature (fetching via epic when clicking on feature?)
  */
  return (
    <div>
      {display &&
        <div id="REPORT_EXTENSION">
          {currentFeatures &&
            currentFeatures.map(feature => {
              return <FeatureReports feature={feature} schemasByLayers={schemasByLayers}/>
              

            })
          }
        </div>}
    </div>);
};

export default Extension;
