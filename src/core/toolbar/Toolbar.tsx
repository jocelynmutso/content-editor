import React from 'react';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

interface ToolbarProps {

}

const Toolbar: React.FC<ToolbarProps> = () => {
  return (
    <div>
      <EditIcon />
      <SaveIcon />
      <DeleteIcon />
    </div>
  )
}

export { Toolbar }