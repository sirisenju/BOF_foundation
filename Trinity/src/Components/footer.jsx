import React from 'react'
import Swipper from './swipper'

function Footer() {
    return (
        <footer className='min-h-[40vh] text-center bg-[#D3D3D3]'>
            <Swipper/>
            <div className='flex justify-center gap-8 mt-5'>
                        <a href=""><img src="assets/whatsapp.png" className='w-[40px] h-[40px]' alt="" /></a>
                        <a href=""><img src="assets/youtube.png" className='w-[40px] h-[40px]' alt="" /></a>
                        <a href=""><img src="assets/facebook (1).png" className='w-[40px] h-[40px]' alt="" /></a>
                    </div>
            <p className='text-base pt-5'>Copyright 2020 @Siri</p>
        </footer>
    )
}

export default Footer
