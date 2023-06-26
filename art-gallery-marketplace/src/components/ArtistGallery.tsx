import { Link } from "react-router-dom"
import useFetch from "./custom-hooks/useFetch"
import React, { useEffect, useState } from "react"
import ArtistItem from "./ArtistItem"
import { Artwork } from "./ArtGallery";

interface Commission {
  _id: string;
  title: string;
  name: string;
  due_date: Date;
  price: number;
  description: string;
}
export interface Artist {
    id: string;
    name: string;
    image: string;  
    bio: string;
    style: string;
    artworks: string[];
    commissions: Commission[];
  }

export default function ArtistGallery(){
  const { get } = useFetch()
  const [data, setData] = useState<Artist[]>([]);

  useEffect(() => {
    (async () => {const data = await get('/artists/')
    setData(data)
    })()
  }, [get])
  
  return <div className="m-2">
    <h1 className="text-light" style={{textAlign: "center"}}>Artists</h1>
    <hr></hr>
    <h3 className="text-secondary" style={{textAlign: "center"}}>
      Not an artist? Want to be? Click &nbsp;
      <Link to="/join-us" className="btn btn-primary">Here</Link>
      &nbsp; to make your artist page!
    </h3>
    <hr></hr>
      <div className="grid-container">
        {!data.length
          ? <>Loading ...</>
          : data.map(artist => <ArtistItem key={artist.id} artist={artist} />)}
      </div>
  </div>
}
