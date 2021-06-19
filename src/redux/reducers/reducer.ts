import { Reducer } from "redux"
import { building } from "../types/storeTypes"
import { getBuilding, getBuildings } from "../types/actionTypes"

type actions = getBuilding | getBuildings

const initialState: building[] = []

const buildingReducer: Reducer<building[], actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "GET_BUILDINGS":
      return [...state]
    case "GET_BUILDING":
      return [...state]
    default:
      return [...state]
  }
}

export default buildingReducer
