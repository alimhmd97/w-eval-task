import { IconButton, Slide, Snackbar } from '@mui/material';
import { useEffect ,useState} from 'react';

export default function MuiSnackbar({msg,setMsg}) { 

const [transition, setTransition] = useState(undefined);

function TransitionRight(props) {
    return <Slide {...props} direction="right" />;
}
const handleTranstion = () => {
    setTransition(() => TransitionRight);
};

useEffect(() => {
    if (msg) { handleTranstion() }
}, [msg]);
const close = (
    <>
        <IconButton
            size="small"
            aria-label="close"

            className=' text-danger'
        >
        </IconButton>
    </>
);

return (
    <div >

        <Snackbar
            TransitionComponent={transition}
            open={!!msg}
            autoHideDuration={4000}
            onClose={() => { setMsg('') }}
            message={msg}
            action={close}
        />

    </div>

);
}

