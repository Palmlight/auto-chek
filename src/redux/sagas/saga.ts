import { takeEvery, put, call, StrictEffect } from "redux-saga/effects"
import { actionIds } from "../types/actionTypes"
import { getBuilding, getBuildings } from "../types/actionTypes"
import axios, { AxiosResponse } from "axios"
// import baseApi from "../../ApiUtils/ApiUtil"

const baseApi = axios.create({
  baseURL: "https://data.cityofchicago.org/resource/ydr8-5enu.json/"
})
// wokers

function* getAllBuildings() {
  try {
    const response: AxiosResponse = yield call(baseApi.get, "/")
    switch (response.status) {
      case 200:
        const data: getBuildings = {
          type: "GET_BUILDINGS"
        }
        yield put(data)
    }
  } catch (err) {}
}

function* getSingleBuilding({ id }: getBuilding) {
  try {
    const response: AxiosResponse = yield call(baseApi.get, `/&?id=${id}`)
    switch (response.status) {
      case 200:
        const data: getBuilding = {
          type: "GET_BUILDING",
          id: id
        }
        yield put(data)
    }
  } catch (err) {}
}

// Watchers

function* buildingSaga(): Generator<StrictEffect> {
  yield takeEvery(actionIds.GET_BUILDING, getSingleBuilding)
  yield takeEvery(actionIds.GET_BUILDINGS, getAllBuildings)
}

export default buildingSaga
