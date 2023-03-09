import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupAvatars() {
  return (
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="../../src/assets/img/dave-128.jpg" />
      <Avatar alt="Travis Howard" src="../../src/assets/img/carol-128.jpg" />
      <Avatar alt="Cindy Baker" src="../../src/assets/img/bob-128.jpg" />
      <Avatar alt="Agnes Walker" src="../../src/assets/img/eve-128.jpg" />
      <Avatar alt="Trevor Henderson" src="../../src/assets/img/paul-128.jpg" />
      <Avatar alt="Trevor Henderson" src="../../src/assets/img/xena-128.jpg" />
    </AvatarGroup>
  );
}
