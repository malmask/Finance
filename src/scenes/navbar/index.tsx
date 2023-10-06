import { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon  from "@mui/icons-material/Pix"
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";

type Props = {};

const Navbar = (props: Props) => {
    const { palette } = useTheme();
    const [selected, setSelected] = useState("dashboard");
    return (
        <FlexBetween mb="0.25" p="0.5rem 0rem" color={palette.grey[300]}>
            {/* left sid */}
            <FlexBetween gap="0.75rem">
                <PixIcon sx={{ fontSize: "28px"}} />
                <Typography variant="h4" fontSize="16px">
                    Finanseer
                </Typography>
            </FlexBetween>
            {/* righh side*/}
            <FlexBetween gap="2rem">
                <Box sx={{"&:hover": { color: palette.primary[100]}}}>
                    <Link
                        to="/"
                        onClick={()=>setSelected("dashboard")}
                        style={{
                            color: selected ===" dashbaord"? "inherit":palette.grey[700],
                            textDecoration: "inherit",
                        }}
                    >
                     dashboard
                     </Link>
                </Box>
                <Box sx={{"&:hover": { color: palette.primary[100]}}}>
                    <Link
                        to="/predictions"
                        onClick={()=>setSelected("predictions")}
                        style={{
                            color: selected ===" predictions"? "inherit":palette.grey[700],
                            textDecoration: "inherit",
                        }}
                    >
                     predictions
                     </Link>
                </Box>
            </FlexBetween>
        </FlexBetween>
    );
}

export default Navbar;