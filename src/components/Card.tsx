import Image from 'next/image'
import InteractiveCard from './InteractiveCard'

export default function ProductCard({ venueName, imgSrc }: { venueName: string, imgSrc: string }) {
    return (
        <InteractiveCard contentName={venueName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                    alt='Product Picture'
                    fill={true}
                    className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[30%] p-[10px]'>
                <h3 style={{ color: "burlywood", marginBottom: "3px" }}>{venueName}</h3>
                <h5>A stunning bouquet hall where love blossoms and unforgettable memories are made.</h5>
            </div>
        </InteractiveCard>
    )
}