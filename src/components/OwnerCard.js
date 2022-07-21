
const OwnerCard = ({owner}) => {
  return (
    <>
        <div>Owner Card</div>
        <h1>{owner ? `${owner.first_name} ${owner.last_name}` : 'Please Select an Owner!'}</h1>
    </>
  )
}

export default OwnerCard