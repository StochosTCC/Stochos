import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HeaderPopover from '../HeaderPopover/index';
import { GrupoMeta } from '../../../enums/GrupoMeta/GrupoMeta';

interface Props{
  type: GrupoMeta
}

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


  if( type === GrupoMeta.GRUPO){
    return  <>
        <Button aria-describedby={id} variant="text" onClick={handleClick} sx={{fontSize: 24, fontWeight: 540}}>Grupos</Button>
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
          <HeaderPopover type={GrupoMeta.GRUPO} />
        </Popover>
      </>
  }else if( type === GrupoMeta.META){
    return  <>
        <Button aria-describedby={id} variant="text" onClick={handleClick} sx={{fontSize: 24, fontWeight: 540}}>Metas</Button>
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
          <HeaderPopover type={GrupoMeta.META} />
        </Popover>
      </>
  }else{
    return null;
  }
}


