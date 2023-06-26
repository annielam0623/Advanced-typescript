import ArtworkForm from "./forms/ArtworkForm"
import useFetch from "./custom-hooks/useFetch"
import { useNavigate, useParams } from "react-router-dom"
import React,{ useState, useEffect } from "react"

interface Artwork {
  title: string;
  pic: string;
  artist: string;
  description: string;
  price: number;
  year: number;
  style: string;
  size: string;
  sold: boolean;
  copies: number;
}


export default function EditArtwork() {
  const { get, put } = useFetch()
  const params = useParams()
  const navigate = useNavigate()
  const [artwork, setArtwork] = useState<Artwork>({
    title: '',
    pic: '',
    artist: '',
    description: '',
    price: 0,
    year: 0,
    style: '',
    size: '',
    sold: false,
    copies: 0,
  });
  

  useEffect(() => {
    (async () => {
        const data = await get(`/artworks/${params.id}`)
        setArtwork(data)
    })()
  }, [])

  const handleSubmit = async (e: { preventDefault: () => void; target: { title: any; pic: any; description: any; price: any; year: any; style: any; size: any; copies: any } }) => {
    e.preventDefault()

    const { title, pic, description, price, year, style, size, copies } = e.target as typeof e.target & {
      title: { value: string };
      pic: { value: string };
      description: { value: string };
      price: { value: string };
      year: { value: string };
      style: { value: string };
      size: { value: string };
      copies: { value: string };
    };
    
    await put(`/artworks/${params.id}`, {
      title: title.value,
      pic: pic.value,
      artist: artwork.artist,
      description: description.value,
      price: parseFloat(price.value),
      year: parseInt(year.value),
      style: style.value,
      size: size.value,
      sold: false,
      copies: copies.value
    })

    navigate(`/artists/${artwork.artist}`)
  }

  return <div>
    <h1 className='text-secondary' style={{textAlign:"center"}}>Update Artwork</h1>
    {!artwork.title
        ? <></>
        : <ArtworkForm
            legend="Artwork Form"
            onSubmit={handleSubmit}
            formInputs={{
                title: artwork.title,
                pic: artwork.pic,
                artist: artwork.artist,
                description: artwork.description,
                price: artwork.price,
                year: artwork.year,
                style: artwork.style,
                size: artwork.size,
                sold: artwork.sold,
                copies: artwork.copies
            }}
        />
    }
  </div>
}