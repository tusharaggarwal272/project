import React from 'react'
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Button, Typography, TextField } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { capitalize } from 'lodash';
import { CircularProgress } from '@mui/material';
import MenuBar from '../Components/MenuBar';


const style2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%'
};

function ParticularCourse() {
    const params = useParams();
    const [videoModal, setVideoModal] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [video, setVideo] = useState();
    const [Uploading, setUploading] = useState(false);
    const [UploadVideoButton, SetUploadVideoButton] = useState('Upload Video');
    const [progress, setProgress] = useState(0);
    const [courseName, setCourseName] = useState('');
    const [videos, setVideos] = useState([]);
    const [loading, setloading] = useState(false);

    const handleClose = (e) => {
        e.preventDefault();
        setVideoModal(false);
    }

    useEffect(() => {
        setloading(true);
        axios.post('/api/courses/videos/findCourseDetails', { courseid: params.courseid }).then((res) => {
            // console.log(res);
            console.log(res.data);
            setCourseName(res.data.name);
            setVideos(res.data.videos);
            setloading(false);
        }).catch((err) => {
            console.log(err);
            setloading(false);
        })
    }, []);

    const handleVideoFile = async (e) => {
        e.preventDefault();
        setUploading(true);
        try {
            const file = e.target.files[0];
            SetUploadVideoButton(file.name);
            // console.log(file);
            const videoData = new FormData();
            videoData.append("video", file);
            console.log(videoData);
            const { data } = await axios.post('/api/courses/video-upload', videoData, {
                onUploadProgress: (e) => {
                    setProgress(Math.round((100 * e.loaded) / e.total));
                }
            });
            console.log(data);
            setVideo(data);
            setUploading(false);

        } catch (error) {
            console.log("Error while uploading the Video", error.message);
            // toast("Video Upload failed")
            setUploading(false);

        }
    }


    const handleVideoRemove = async () => {
        try {
            setUploading(true);
            console.log(video);
            const { data } = await axios.post('/api/courses/video-remove', { "video": video });
            setVideo();
            console.log(data);
            setUploading(false);
            setProgress(0);
            SetUploadVideoButton("Upload Another Video");
        } catch (error) {
            setUploading(false);
            console.log("Error while removing the Video", error.message);
        }
    }

    const handleAddVideo = async (e) => {
        if (title.trim() === '') {
            alert("Title cannot be empty");
            return;
        }
        e.preventDefault();
        console.log("Clicked the handleAdd video part")
        setUploading(true);
        try {
            const videoDetail = {
                title: title,
                description: description,
                video: video.Location,
                course: courseName,
                courseid: params.courseid
            }
            console.log(videoDetail);
            await axios.post('/api/courses/videos/video-upload', { video: videoDetail }).then((res) => {
                console.log(res);
                window.location.reload();
            }).catch((err) => {
                console.log(err);
            })
            setUploading(false);
        } catch (error) {
            setUploading(false);
            console.log(error.message);
        }
    }

    if (loading) {
        return <Box sx={{ display: 'flex', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
        </Box>

    }



    return (

        <Box sx={{ position: 'relative', display: 'flex', width: '100vw', height: '100vh', overflowX: 'hidden' }}>
            <Box>
                <MenuBar />
            </Box>
            {/* sx={{ width: '80vw', height: '100%', position: 'absolute', right: '0%' }} */}
            <div style={{ width: '80vw', height: '100%', overflowX: 'hidden', position: 'absolute', right: '0%', display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '0' }}>
                <Typography sx={{ textAlign: 'center', color: 'blue', fontSize: '4em', margin: '2%', marginTop: '1%' }}>{capitalize(courseName)}</Typography>
                <Box >
                    {
                        videos.length > 0 && <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {
                                videos.map((v) => (
                                    <Grid key={v._id} item md={3} sm={12}  >
                                        <Card>
                                            <CardActionArea>
                                                <CardMedia
                                                    src={v.link}
                                                    component="video"
                                                    autoPlay
                                                    controls
                                                    height="140"

                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {capitalize(v.title)}
                                                    </Typography>
                                                    <Typography variant="body2" color="#ccc">
                                                        {
                                                            v.description

                                                        }
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>

                                    </Grid>
                                ))
                            }
                        </Grid>
                    }
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10%' }}>
                    <Button sx={{ marginBottom: '4%', width: '80%' }} variant='contained' onClick={(e) => {
                        e.preventDefault();
                        setVideoModal(true)
                    }}> <CloudUploadIcon /> &nbsp; Add Video Lesson</Button>

                </Box>


                <Modal open={videoModal} onClose={handleClose}>
                    <Box sx={style2}>

                        <Typography>Uploading the Video Lesson</Typography>
                        <TextField sx={{ padding: '2%', width: '100%' }} value={title} placeholder='Enter the title of the Video Lesson' onChange={(e) => { setTitle(e.target.value) }}></TextField>
                        {/* <TextareaAutosize value={description} placeholder='Description...' onChange={(e) => { setDescription(e.target.value) }} /> */}
                        <textarea
                            // sx={{ padding: '2%', width: '150%' }}
                            rows={7}
                            cols={60}
                            value={description}
                            // aria-label="empty textarea"
                            placeholder="Enter the Description for the Lesson"
                            // style={{ width: 200 }}
                            onChange={(e) => { setDescription(e.target.value) }}

                        />
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <label style={{ background: 'black', color: 'white', width: '100%', padding: '2%', margin: '2%', display: 'flex', justifyContent: 'space-around' }} >
                                {UploadVideoButton}
                                <input onChange={handleVideoFile} type={"file"} accept="video/*" hidden />
                                {
                                    progress === 100 && <Button variant='contained' ><CancelIcon onClick={handleVideoRemove} /></Button>
                                }
                            </label>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <Box sx={{ width: '100%', margin: '0' }}>{(progress > 0 && progress !== 100) && <LinearProgress value={progress} />}</Box>
                                {(progress > 0 && progress !== 100) && <Typography>{progress}%</Typography>}

                            </Box>
                        </Box>

                        <Button disabled={Uploading} sx={{ margin: '2%', width: '100%' }} variant='contained' fullWidth onClick={handleAddVideo}>SAVE</Button>

                    </Box>

                </Modal>
            </div>
        </Box>

    )
}

export default ParticularCourse