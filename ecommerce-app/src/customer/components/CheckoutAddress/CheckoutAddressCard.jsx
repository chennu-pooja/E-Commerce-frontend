import React from 'react';
import { Typography, Grid, Button, FormControlLabel, Radio } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
function CheckoutAddressCard() {
  return (
    <div className="rounded-lg text-sm md:text-xl w-full">
      <div className=' bg-white' style={{ border: '1px solid #ccc',boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
        <div className='w-full'>
        <Grid container >
          <div className='w-full'>
          <Grid style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='flex justify-around w-full'>
            
              <div className='flex sm:space-x-3 items-center w-full'>
                <FormControlLabel
                  className='pl-4'
                  control={<Radio />}
                  id="leftButton"
                  name="buttonPosition"
                />
                <div className=' font-semibold'>
                  skp
                </div>
                <div className=' hidden sm:flex'>
                  <p className=' font-bold text-green-500 border border-solid w-fit p-2 border-green-500 rounded-3xl text-xs align-middle hover:bg-gray-300'>Home</p>
                </div>
              </div>
            <div className='px-4 pt-4'>
              <Button className='' variant="outlined" style={{fontSize:'12px'}}>
              <EditIcon style={{ color: '#1976D2',fontSize:'12px'}} />
              Edit</Button>
            </div>
          </div>
          <div className='pl-4 pr-4 text-gray-500'>
            <Typography style={{ textAlign: 'left',marginTop:'7px' }}>
              Aditya Hyundai, Plot No 2132/5132,
              Hal Plot No 342/P, Lewis Road, Dist,
              BJB Nagar
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'left', marginBottom: '8px' }}>
              Bhubaneswar, ODISHA - 751014,
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'left', marginBottom: '8px' }}>
            6371949629
            </Typography>
            <p className=' font-bold text-green-500 border border-solid w-fit p-2 border-green-500 rounded-3xl text-xs mb-2 sm:hidden hover:bg-gray-30'>Home</p>
            </div>
          </Grid>
          </div>
        </Grid>
        </div>
      </div>
    </div>
  );
}
export default CheckoutAddressCard;