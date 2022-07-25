import StatusCard from "./StatusCard"

const StatusList = ({petStatuses}) => {
    const renderStatuses=petStatuses?.map(pet_status=><StatusCard key={pet_status.id} petStatus={pet_status}/>)
  return (
    <div>{renderStatuses}</div>
  )
}

export default StatusList