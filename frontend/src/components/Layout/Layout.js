import React, { useState } from 'react';
import Box from "@mui/material/Box";
import MetisHeader from "./Header";
import MetisDrawer from "./Drawer";

export default function Layout({ children }) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const drawerWidth = 240
    return (
        <Box sx={{ display: 'flex' }}>
            <MetisHeader handleDrawerOpen={handleDrawerOpen} drawerOpen={drawerOpen} />
            <MetisDrawer handleDrawerClose={handleDrawerClose} drawerOpen={drawerOpen} />
            <Box component="main" sx={{
                flexGrow: 1,
                p: 10,
                marginLeft: drawerOpen ? 0 : `-240px`, // Add this line
                transition: 'margin 0.3s ease' // And this one for a smooth transition
            }}>
                {children}
            </Box>
        </Box>
    )
}