import './css/images.css'
import useFetch from './custom-hooks/useFetch';
import { useEffect, useState } from 'react';
import React from 'react';

interface Image {
    artist: string;
    title: string;
    pic: string;
  }
  
  interface ImageViewProps {
    image: Image;
  }
  

export default function ImageView({image}: ImageViewProps) {
    const { get } = useFetch()

    const [artist, setArtist] = useState<any>(null)

    useEffect(() => {
        (async () => {
            const artist = await get(`/artists/${image.artist}`)
            setArtist(artist)
        })()    
    }, [image.artist])

    return (
        <div className="bg-secondary rounded-4" style={{ width:"30vw", height: '100%', display:"inline-block", }}>
            <h1 className="text-light">{image.title}</h1>        
            <img style={{ margin: 'auto' }} src={image.pic} className='center' alt="Imag" />
            {!artist
                ? <>Loading ...</>
                : <h3 className="text-light">{artist}</h3>
            }
        </div>
    )
}
