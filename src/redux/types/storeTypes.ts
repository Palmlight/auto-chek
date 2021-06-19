export type building = {
  id: string
  permit_: string
  permit_type: string
  review_type: string
  application_start_date: string
  issue_date: string
  processing_time: string
  street_number: number
  street_direction: string
  street_name: string
  suffix: string
  work_description: string
  building_fee_paid: string
  zoning_fee_paid: string
  other_fee_paid: string
  subtotal_paid: string
  building_fee_unpaid: number
  zoning_fee_unpaid: number
  other_fee_unpaid: number
  subtotal_unpaid: number
  building_fee_waived: number
  zoning_fee_waived: number
  other_fee_waived: number
  subtotal_waived: number
  total_fee: number
  contact_1_type: string
  contact_1_name: string
  contact_1_city: string
  contact_1_state: string
  contact_1_zipcode: number
  contact_2_type: string
  contact_2_name: string
  contact_2_city: string
  contact_2_state: string
  contact_2_zipcode: string
  contact_3_type: string
  contact_3_name: string
  contact_3_city: string
  contact_3_state: string
  contact_3_zipcode: string
  reported_cost: string
  pin1: string
  community_area: number
  census_tract: number
  ward: number
  xcoordinate: number
  ycoordinate: number
  sNo: number
}

interface storetype {
  buildings: building[]
}

export default storetype
