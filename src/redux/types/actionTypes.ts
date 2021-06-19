export interface getBuilding {
  type: "GET_BUILDING"
  id: string
}

export interface getBuildings {
  type: "GET_BUILDINGS"
}

export const actionIds = {
  GET_BUILDING: "GET_BUILDING",
  GET_BUILDINGS: "GET_BUILDINGS"
}
