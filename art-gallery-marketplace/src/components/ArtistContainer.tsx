import ArtistView from "./ArtistView";
import { Link, Outlet, useParams  } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import useFetch from './custom-hooks/useFetch';

interface ArtworkData {
    _id: string;
    pic: string;
    title: string;
    description: string;
  }
interface Artist {
    id: string;
    name: string;
    image: string;
    bio: string;
    style: string;
    artworks: ArtworkData[];
  }
  
interface ArtistViewProps {
    artist: Artist;
  }

export default function ArtistContainer(){
    const { get } = useFetch();
    const { id } = useParams();
    const [data, setData] = useState<Artist | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(() => {
        (async () => {
          try {
            const fetchedData = await get(`/artists/${id}`);
            setData(fetchedData);
            setIsLoading(false);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [get, id]);
    
      if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (!data) {
        return <div>Data not found.</div>;
      }

    return <div>
        {!data
            ? <>Loading ...</>
            : <>
            <ArtistView artist={data} />
        <h3 style={{textAlign:"center"}} className="text-secondary mt-3">
            Click &nbsp;
            <Link to={`/artwork-form/${data.id}`} className="btn btn-primary">Here</Link>
            &nbsp; to add more artwork to your page!
        </h3>
        <hr />
        <Outlet context={{artist: data}} />
        <div className="d-flex justify-content-center gap-3">
            <Link to={`/artists/update/${id}`}>
                <button className="btn btn-primary">Update Profile</button>
            </Link>
            <Link to={`/artists/delete/${id}`}>
                <button className="btn btn-danger">Delete Profile</button>
            </Link>
        </div>
            </>
        }
    </div>
}