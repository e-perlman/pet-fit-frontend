import { FormControl, MenuItem } from "@material-ui/core"
import { InputLabel,Select } from "@mui/material"

const OwnerFilter = ({owners,onOwnerChange}) => {
    // const renderOwners=owners.map(owner => 
    //     <option key={owner.id} value={`${owner.id}`}>
    //         {`${owner.first_name} ${owner.last_name}`}
    //     </option>)
    const renderOwners=owners.map(owner => 
        <MenuItem key={owner.id} value={`${owner.id}`}>
            {`${owner.first_name} ${owner.last_name}`}
        </MenuItem>)
  return (
    <>
        <form>
            <FormControl>
                <InputLabel id='select-owner'>Choose Owner Name</InputLabel>
                <Select 
                    autoWidth={true}
                    labelId="select-owner"
                    id="demo-simple-select"
                    label="Select Owner"
                    defaultValue={null}
                    onChange={onOwnerChange}
                >
                    <MenuItem value={null}>Not Selected</MenuItem>
                    {renderOwners}
                </Select>
            </FormControl>

            {/* <select onChange={onOwnerChange}>
                <option value={null}>Not Selected</option>
                {renderOwners}
            </select><br/> */}
        </form>
    </>
  )
}

export default OwnerFilter