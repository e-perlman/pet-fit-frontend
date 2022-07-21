
const OwnerFilter = ({owners,onOwnerChange}) => {
    const renderOwners=owners.map(owner => 
        <option key={owner.id} value={`${owner.first_name} ${owner.last_name}`}>
            {`${owner.first_name} ${owner.last_name}`}
        </option>)
  return (
    <>
        <div>Owner Filter</div>
        <form>
            <label htmlFor="name">Name</label>
            <select onChange={onOwnerChange} required>
                {renderOwners}
            </select><br/>
        </form>
    </>
  )
}

export default OwnerFilter