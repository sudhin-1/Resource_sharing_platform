import React, { useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


function Card() {
// for storing user information    
      const [userinput,setUserInput] =  useState(
    {
        information : {
            title : '',
            description : ''
        }
    }
)


    return (
        <>
            {/* cards */}
            <div className='col-md-8 border d-flex '>
                <div className="col-md-4">
                    <div className="mt-5 mx-auto w-75 border shadow bg-white rounded p-3 text-center">
                        <TextField
                            value={userinput.information.title}
                            onChange={(e) => setUserInput({...userinput,information : { ...userinput.information , title : e.target.value} })}
                            id="field1"
                            label="Title"
                            variant="standard"
                            fullWidth
                            className="mb-3"

                        />
                        <TextField
                            value={userinput.information.description}
                            onChange={(e) => setUserInput({...userinput , information : { ...userinput.information , description : e.target.value} })}
                            id="field2"
                            label="Description"
                            variant="standard"
                            fullWidth
                            className="mb-3"
                        />
                        <button disabled className="text-center btn btn-secondary w-75 rounded mb-2">
                            Available
                        </button>
                        <button className="btn btn-primary w-75 rounded mb-2">
                            Update-status
                        </button>
                        <button className="btn btn-danger w-75 rounded">
                            Delete
                        </button>
                    </div>
                </div>

                <div className="col-md-4 ">
                    <div className='mt-5 border shadow ms-5 w-75 h-25 bg-white rounded fs-1 d-flex justify-content-center align-items-center'>
                        <CiCirclePlus />
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className='mt-5 border shadow ms-5 w-75 h-25 bg-white rounded fs-1 d-flex justify-content-center align-items-center'>
                        <CiCirclePlus />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card