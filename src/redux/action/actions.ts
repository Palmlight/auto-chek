import {
  getBuildingActionCreator,
  getBuildingsActionCreator
} from "../types/actionCreatorTypes"

export const getBuilding: getBuildingActionCreator = id => {
  return {
    type: "GET_BUILDING",
    id
  }
}

export const getBuildings: getBuildingsActionCreator = () => {
  return {
    type: "GET_BUILDINGS"
  }
}
