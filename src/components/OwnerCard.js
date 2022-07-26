
const OwnerCard = ({owner,onDeleteProfile}) => {
  const handleClick = () => {onDeleteProfile(owner.id) }
  return (
    <>
        <div>Owner Card</div>
        {owner? 
        <div>
          <h1>{`${owner.first_name} ${owner.last_name}`}</h1>
          <h3>{`Age: ${owner.age}`}</h3>
          <h3>{`Email: ${owner.email}`}</h3>
          <button onClick={handleClick}>Remove Profile</button>
        </div>
        :<h1>Please Select an Owner!</h1>}
    </>
  )
}

export default OwnerCard