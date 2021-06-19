import React from "react"
import "../stylesheets/home.scss"
import { Loader } from "../components/loader/Loader"
import { RouteChildrenProps, RouteProps, useParams } from "react-router-dom"
import { useGetBuildingQuery } from "../redux/services/buildings"

const Building: React.FC = () => {
  const { id } = useParams<any>()
  const { data, isLoading } = useGetBuildingQuery(id)

  return (
    <div className="home building">
      <h1>BUILDING</h1>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="content-body">
          <div className="content-listing">
            <h2>{data[0].contact_1_name}</h2>
            <h2>{data[0].contact_1_type}</h2>
            <h2>{data[0].contact_1_zipcode}</h2>
            <h2>{data[0].permit_type}</h2>
            <h2>{data[0].issue_date}</h2>
            <h2>{data[0].review_type}</h2>
            <h2>{data[0].reported_cost}</h2>
            <h2>{data[0].street_name}</h2>
          </div>
        </div>
      )}
    </div>
  )
}

export default Building
