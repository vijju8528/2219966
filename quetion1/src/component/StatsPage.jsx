import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

export default function StatsPage({ urls }) {
  return (
    <div>
      <Typography variant="h4">Statistics</Typography>
      <List>
        {urls.map((u, idx) => (
          <ListItem key={idx}>
            <ListItemText
              primary={`Shortcode: ${u.shortcode} | Clicks: ${u.clicks.length}`}

              secondary={`Created: ${new Date(u.createdAt).toLocaleString()}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
