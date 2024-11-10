import React from 'react'

function Footer() {
    return (
        <footer className='min-h-[40vh] text-center bg-[#D3D3D3]'>
            <div className='w-full md:w-[80%] mx-auto flex justify-center p-8'>
                <div className='max-w-xl text-center p-2'>
                    <p className=''>" I lift up my eyes to the hills-- where does my help come from? My help comes from the LORD, 
                        the Maker of heaven and earth. indeed, he who watches over Israel will neither slumber nor 
                        sleep. the sun will not harm you by day, nor the moon by night. "
                    </p>
                    <p className='pt-2 font-semibold text-xl'>Psalm 121 1</p>

                    <div className='flex justify-center gap-8 mt-5'>
                        <a href=""><img src="assets/whatsapp.png" className='w-[40px] h-[40px]' alt="" /></a>
                        <a href=""><img src="assets/youtube.png" className='w-[40px] h-[40px]' alt="" /></a>
                        <a href=""><img src="assets/facebook (1).png" className='w-[40px] h-[40px]' alt="" /></a>
                    </div>
                </div>
            </div>
            <p className='text-base'>Copyright 2020 @Siri</p>
        </footer>
    )
}

export default Footer
