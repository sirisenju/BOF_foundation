import React from 'react'
import Swipper from './swipper'

function Footer() {

    const data = [
        {id: 1, content: `"I lift up my eyes to the hills-- where does my help come from? My help comes from the LORD, 
                        the Maker of heaven and earth. indeed, he who watches over Israel will neither slumber nor 
                        sleep. the sun will not harm you by day, nor the moon by night."`, verse: "Psalm 121 1"},
        {id: 2, content: `"I lift up my eyes to the hills-- where does my help come from? My help comes from the LORD, 
                        the Maker of heaven and earth. indeed, he who watches over Israel will neither slumber nor 
                        sleep. the sun will not harm you by day, nor the moon by night."`, verse: "Psalm 121 1"},
        {id: 2, content: `"I lift up my eyes to the hills-- where does my help come from? My help comes from the LORD, 
                        the Maker of heaven and earth. indeed, he who watches over Israel will neither slumber nor 
                        sleep. the sun will not harm you by day, nor the moon by night."`, verse: "Psalm 121 1"},
    ]
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
