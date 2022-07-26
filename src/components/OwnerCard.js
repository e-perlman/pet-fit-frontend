
const OwnerCard = ({owner,onDeleteProfile}) => {
  const handleClick = () => {onDeleteProfile(owner.id) }
  return (
    <>
      <h1>{`${owner.first_name} ${owner.last_name}`}</h1>
      <h3>{`Age: ${owner.age}`}</h3>
      <h3>{`Email: ${owner.email}`}</h3>
      <button onClick={handleClick}>Remove Profile</button>
    </>
  )
}

export default OwnerCard