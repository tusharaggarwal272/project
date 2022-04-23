import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';

function NewSection() {
    const [open, setOpen] = React.useState(true);
    // { console.log(window.location.href.samplename) }
    const [courseName, setCourseName] = useState('');

    const handleChange = (e) => {
        setCourseName(e.target.value);
    }

    const handleCancelClick = () => {
        setCourseName('');
        return;
    }
    const handleCreateClick = () => {
        window.location.href = `/admin/content/courses/${courseName}`
    }

    const params = useParams();
    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: '5%', marginTop: '2%', alignItems: 'center' }}>
            <Collapse in={open} sx={{ width: '95%' }}>
                <Alert severity="success"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }>
                    Collection was successfully created.
                </Alert>
            </Collapse>

            <Typography sx={{ fontSize: '250%', margin: '1%', marginBottom: '0%', fontWeight: 'bold', width: '90%', textAlign: 'start' }}> {(params.samplename)}</Typography>
            <Box sx={{ width: '90%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: '#D3D3D3' }}>
                <Typography sx={{ fontSize: '15px', margin: '0 1px', fontWeight: 'bold' }}>Not Published</Typography>
                <FiberManualRecordIcon sx={{ fontSize: '10px', margin: '0 1px' }} />
                <Typography sx={{ fontSize: '15px', margin: '0 1px', fontWeight: 'bold' }}>0 Enrolled Users</Typography>
            </Box>

        </Box>
    )
}

export default NewSection