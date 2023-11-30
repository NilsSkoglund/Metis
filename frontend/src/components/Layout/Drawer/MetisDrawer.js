import {AppBar, Divider, Drawer, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from "@mui/material/IconButton";
import {styled, useTheme} from "@mui/material/styles";

const drawerWidth = 240

const CustomDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== "drawerOpen" })(({ theme, drawerOpen }) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    width: drawerWidth,
    ...(drawerOpen && {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function MetisDrawer({ handleDrawerClose, drawerOpen }) {
    const theme = useTheme();

    return (
        <CustomDrawer
            variant={"persistent"}
            anchor={"left"}
            open={drawerOpen}
            sx={{
                flexShrink: 0,
                width: drawerWidth,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
        }}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon/>
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {['Patient Information'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Overview', 'Notes', 'Diagnosis', 'Medications', 'Diagnostic Results'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </CustomDrawer>
    )
}