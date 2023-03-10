import { Box, Modal } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";
import { setAuthModelOpen } from "../../redux/features/authModalSlice";

import { useEffect, useState } from "react";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";

const actionState = {
    signin: "signin",
    signup: "signup",

}

const AuhModal = () => {
    const { authModalOpen } = useSelector((state) => state.authModal);

    const dispatch = useDispatch();


    const [action, setAction] = useState(actionState.signin);

    useEffect(() => {
        if (authModalOpen) setAction(actionState.signin)
    }, [authModalOpen])

    const handleClose = () => dispatch(setAuthModelOpen(false));

    const switchAuthState = (state) => setAction(state);


    return (
        <Modal open={authModalOpen} onClose={handleClose}>
            <Box sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
                maxWidth: "600px",
                padding: 4,
                outline: "none"
            }}>
                <Box sx={{ padding: 4, boxShadow: 24, backgroundColor: "background.paper" }}>
                    <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
                        <Logo></Logo>
                    </Box>
                    {action === actionState.signin &&
                        <SigninForm switchAuthState={() => switchAuthState(actionState.signup)}></SigninForm>
                    }

                    {action === actionState.signup &&
                        <SignupForm switchAuthState={() => switchAuthState(actionState.signin)}></SignupForm>
                    }
                </Box>
            </Box>
        </Modal>
    );
};

export default AuhModal;