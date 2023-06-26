import ArtistForm from "./forms/AritstForm.tsx"
import useFetch from "./custom-hooks/useFetch"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

interface Artist {
  id: string;
  name: string;
  image: string;
  bio: string;
  phone: number;
  email: string;
  style: string;
  artworks: string[];
}

export default function EditArtist() {
  const params = useParams()

  const { get, put } = useFetch()

  const [artist, setArtist] = useState<Artist | null>(null);

  useEffect(() => {
    (async () => {
      const data = await get(`/artists/${params.id}`)
      setArtist(data)
    })()
  }, [get, params.id]);
  
  const handleSubmit = (e: { preventDefault: () => void; target: { name: any; phone: any; email: any; image: any; style: any; bio: any } }) => {
    e.preventDefault()

    const { name, phone, email, image, style, bio, } = e.target

    put(`/artists/${params.id}`, {
      name: name.value,
      phone: phone.value,
      email: email.value,
      image: image.value,
      style: style.value,
      bio: bio.value
    })
  }
  
  return (
    <div>
      <h1>Update Your Profile</h1>
      {artist && artist.name ? (
        <ArtistForm
          legend="Update Artist"
          onSubmit={handleSubmit}
          formInputs={{
            name: artist.name,
            phone: artist.phone,
            email: artist.email,
            image: artist.image,
            style: artist.style,
            bio: artist.bio,
          }}
        />
      ) : (
        <></>
      )}
    </div>
  )
}
