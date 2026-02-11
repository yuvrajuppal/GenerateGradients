import React, { useEffect } from 'react'
import GradientCard from '../components/GradientCard'
import { useSelector } from 'react-redux';
function LinearGradppage() {
    const colorlist = useSelector((state) => state.CardListSlice.cardcolors)
    useEffect(() => {
        console.log(colorlist);
    }, [colorlist])
   
    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-10">
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 justify-items-center">
                {
                    colorlist.map((item, index) => {
                        return <GradientCard key={`${item.color1}${index}`} color1={item.color1} color2={item.color2} />
                    })
                }
            </div>
        </div>
    )
}

export default LinearGradppage
