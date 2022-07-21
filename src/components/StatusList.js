import StatusCard from "./StatusCard"

const StatusList = ({pets}) => {
    const renderStatuses=pets?.map(pet=><StatusCard key={pet.id} petStatus={pet.pet_statuses}/>)
  return (
    <div>{renderStatuses}</div>
  )
}

export default StatusList