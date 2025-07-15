import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

export default function URLList({ urls }) {
  return (
    <div>
      <Typography variant="h5">Shortened URLs</Typography>
      <List>
        {urls.map((u, idx) => (
          <ListItem key={idx}>
            <ListItemText
             primary={`Shortcode: ${u.shortcode}`}

              secondary={`Original: ${u.original} | Expires in: ${u.expiry} min`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
