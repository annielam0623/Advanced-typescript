import ImageView from "./ImageView";
import useFetch from "./custom-hooks/useFetch";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Image {
  _id: String;
  artist: string;
  title: string;
  pic: string;
}


export interface Artwork {
  _id: string;
  title: string;
  description: string;
}
  
export default function ArtGallery() {
    const { get } = useFetch();
    const [data, setData] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const fetchedData = await get(`/artworks/`);
          setData(fetchedData);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      
      fetchData();
    }, [get]);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>Art Gallery</h1>
        <div className="grid-container bg-dark">
          {data.map((image) => (
            <Link to={`/artworks/${image._id}`}>
              <ImageView image={image} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
  
