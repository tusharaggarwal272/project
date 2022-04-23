import React from 'react'
import './Courses.css'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
const Courses = () => {
    return (
        <div className='courses-main'>
            <div className="courses-content">
                <div className="courses-heading">
                    <div className="courses-heading-left">
                        <div className='courses-title'>
                            <h1>Courses</h1>
                        </div>
                        <div className='courses-count'>/1</div>
                    </div>
                    <div className="courses-heading-right" style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center', width: '50%', padding: '0' }}>
                        <div className="courses-option" style={{ width: '15%', height: '100%' }}>
                            <div className="courses-option-row"><ViewColumnIcon /></div>
                            <div className="courses-option-col"><ArrowForwardIcon /></div>
                        </div>
                        <div className="courses-option" style={{ width: '15%', height: '100%' }}>
                            <div className="courses-option-icon" ><ExitToAppIcon /></div>
                            <div className="courses-option-info" >Export</div>
                        </div>
                        <div className="courses-option" style={{ width: '15%', height: '150%' }}>

                            <div className="courses-option-icon"><FilterAltIcon /></div>
                            <div className="courses-option-info">Filter</div>
                        </div>
                        <div style={{ height: '100%', marginRight: '0%' }}>
                            <Button onClick={() => {
                                window.location.href = '/admin/content/courses/new'
                            }} variant="contained" textAling="center" sx={{ fontSize: '15px', height: '100%' }} size="small">+ New Course</Button>
                        </div>

                    </div>
                </div>
                <div className="courses-list">
                    <div className="courses-allList">
                        <div className="courses-info">
                            {/* photo */}
                        </div>
                        <div className="courses-title">
                            <div className="courses-name">Sample 1</div>
                            <div className="courses-status">Not Published</div>
                        </div>
                    </div>
                    <div className="courses-allList">
                        <div className="courses-info">
                            {/* photo */}
                        </div>
                        <div className="courses-title">
                            <div className="courses-name">Sample 2</div>
                            <div className="courses-status">Not published</div>
                        </div>
                    </div>
                    <div className="courses-allList">
                        <div className="courses-info">
                            {/* photo */}
                        </div>
                        <div className="courses-title">
                            <div className="courses-name">Sample 3</div>
                            <div className="courses-status">Not Published</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Courses