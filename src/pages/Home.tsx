import React from "react"
import BuildingListing from "../components/building/BuildingListing"
import { Loader } from "../components/loader/Loader"
import { useGetBuildingsQuery } from "../redux/services/buildings"
import "../stylesheets/home.scss"
const Home: React.FC = () => {
  const { data, isLoading } = useGetBuildingsQuery("")

  // const sortData = data?.reverse()

  let sortData: [] = []

  if (data) {
    sortData = data.slice().reverse().slice(0, 10)
  }

  console.log(sortData)

  // console.log(sortData)

  return (
    <div className="home">
      <h1>BUILDING LISTING</h1>
      {isLoading && <Loader />}
      <div className="content-body">
        <div className="table-listing table-head">
          <h3>S/N</h3>
          <h3>Name/Date</h3>
          <h3>Permit Type</h3>
          <h3>View Details</h3>
        </div>

        {!isLoading &&
          sortData.map((b, i) => (
            <BuildingListing {...b} sNo={i + 1} key={i} />
          ))}
      </div>
    </div>
  )
}

export default Home
