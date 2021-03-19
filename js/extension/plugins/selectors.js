import { currentResponseSelector } from '@mapstore/selectors/mapInfo';
import { createSelector } from "reselect";

const schemaSelector = state => state.reportExtension && state.reportExtension.schemas || [];

export const schemasByLayersSelector = createSelector(
  schemaSelector,
  currentResponseSelector,
  (schemas, response) => schemas.filter(schema => {
    if (response) {
      return schema.layer_id === response.layer.id;
    }
  })
)