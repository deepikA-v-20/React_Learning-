import React from "react"; // Ensure React is imported
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors'; // Import the pink color

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export function App4() {
    return (
        <div>
            <h1>Welcome</h1>
            <Checkbox {...label} defaultChecked size="small" />
            <Checkbox {...label} defaultChecked />
            <Checkbox
                {...label}
                defaultChecked
                sx={{
                    '& .MuiSvgIcon-root': { fontSize: 28 },
                    color: pink[800],
                    '&.Mui-checked': {
                        color: pink[600],
                    },
                }}
            />
        </div>
    );
}
