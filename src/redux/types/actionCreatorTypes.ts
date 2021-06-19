import { getBuilding, getBuildings } from "./actionTypes"

export type getBuildingActionCreator = (id: string) => getBuilding
export type getBuildingsActionCreator = () => getBuildings
