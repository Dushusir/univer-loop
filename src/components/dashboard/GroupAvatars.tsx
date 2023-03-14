import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupAvatars() {
  return (
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="./assets/img/dave-128.jpg" />
      <Avatar alt="Travis Howard" src="./assets/img/carol-128.jpg" />
      <Avatar alt="Cindy Baker" src="./assets/img/bob-128.jpg" />
      <Avatar alt="Agnes Walker" src="./assets/img/eve-128.jpg" />
      <Avatar alt="Trevor Henderson" src="./assets/img/paul-128.jpg" />
      <Avatar alt="Trevor Henderson" src="./assets/img/xena-128.jpg" />
    </AvatarGroup>
  );
}
