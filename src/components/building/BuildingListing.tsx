import React from "react"
import { Link } from "react-router-dom"
import { building } from "../../redux/types/storeTypes"

const BuildingListing: React.FC<building> = (props: building) => {
  const { id, issue_date, contact_1_name, sNo, permit_type } = props
  return (
    <div className="table-listing building-listing">
      <h5>{sNo}</h5>
      <div>
        <h5>{contact_1_name}</h5>
        <h5>{issue_date.split("T")[0]}</h5>
      </div>
      <h6>{permit_type}</h6>
      <Link to={`building/${id}`} className="permit-link">
        View permit
      </Link>
    </div>
  )
}

export default BuildingListing
