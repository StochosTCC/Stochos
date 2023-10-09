import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface Props{
  type: string
}

const grupo = [
  {
    name: 'Grupo',
    href: '##',
  },
  {
    name: 'Criar Grupo',
    href: '##',
  },
  {
    name: 'Deletar Grupo',
    href: '##',
  },
]

export default function Popup({type}: Props) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  if( type === "grupo"){
    return  <>
        <Button aria-describedby={id} variant="text" onClick={handleClick}>Grupos</Button>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
        >
        </Popover>
      </>
  }else{
    return null;
  }
}


