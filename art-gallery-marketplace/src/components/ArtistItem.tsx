import { Link } from "react-router-dom"
import React from "react";


interface Artist {
    id: string;
    name: string;
    image: string;
    bio: string;
    style: string;
    artworks: string[];
  }
  
interface ArtistItemProps {
    artist: Artist;
  }

export default function ArtistItem({artist}: ArtistItemProps) {
    return (
        <div className="bg-secondary rounded-4" style={{width:"30vw", height:"40vh", display:"inline-block"}}>
            <Link style={{textDecoration:"none"}} className="text-light" to={`/artists/${artist.id}`}>
            <img style={{height:"20vh", width:"25vw"}} src={artist.image !== "" ? artist.image : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"} alt="Artist" />
            <h2>{artist.name}</h2>
            <p>{artist.bio}</p>
            </Link>
        </div>
    )
};
