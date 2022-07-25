import StatusCard from "./StatusCard"

const StatusList = ({pet}) => {
    const renderStatuses=pet.pet_statuses?.map(pet_status=><StatusCard key={pet_status.id} petStatus={pet_status}/>)
  return (
    <div>{renderStatuses}</div>
  )
}

export default StatusList