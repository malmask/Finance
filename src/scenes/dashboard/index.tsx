
import { Box, useMediaQuery } from '@mui/material';

type Props = {}

const gridTemplateLargeScreens=`
"a b c"
"a b c"
"a b c"
"a b f"
"d e f"
"d e f"
"d h i"
"g h i"
"g h j"
"g h h"
`;

const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`;







const Dashboard = (props: Props) => {
    const isAboveMediumScreen = useMediaQuery("(min-width: 1200px)")
  return (
    <Box
     width="100%" 
     height="100%" 
     display="grid" 
     gap="1.5rem"
    sx={
        isAboveMediumScreen ?{
        gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
        gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
        gridTemplateAreas: gridTemplateLargeScreens,
    }:{
        gridTemplateColumns:"1fr",
        gridAutoRows: "80px",
        gridTemplateAreas: gridTemplateSmallScreens,
        }
    }
    > 
        <DaashboardBox gridArea="a"></DaashboardBox>
        <DaashboardBox gridArea="b"></DaashboardBox>
        <DaashboardBox gridArea="c"></DaashboardBox>
        <DaashboardBox gridArea="d"></DaashboardBox>
        <DaashboardBox gridArea="e"></DaashboardBox>
        <DaashboardBox gridArea="f"></DaashboardBox>
        <DaashboardBox gridArea="g"></DaashboardBox>
        <DaashboardBox gridArea="h"></DaashboardBox>
        <DaashboardBox gridArea="i"></DaashboardBox>
        <DaashboardBox gridArea="j"></DaashboardBox>
    </Box>
  );
};

export default Dashboard