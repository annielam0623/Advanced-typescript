import { useOutlet } from "react-router-dom"
import CommissionGallery from "./CommissionGallery"
import NewCommission from "./NewCommission"
import React from "react"
import { Artist } from "./ArtistGallery"

interface Commission {
  _id: string;
  title: string;
  name: string;
  due_date: Date;
  price: number;
  description: string;
 }
  interface CommissionsViewProps {
    artist: Artist;
  }
  
  export default function CommissionsView({ artist }: CommissionsViewProps): JSX.Element {
    return (
      <>
        <h2 style={{ textAlign: "center" }}>Artist's Current Commissions:</h2>
        <CommissionGallery commissions={artist.commissions} />
        <NewCommission />
      </>
    );
  }
  
  
  
  
  
  

