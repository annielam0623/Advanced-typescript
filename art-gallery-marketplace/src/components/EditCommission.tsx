import useFetch from "./custom-hooks/useFetch";
import CommissionForm from "./forms/CommissionForm";
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import React from "react";

export interface Artist {
  id: string;
  name: string;
  image: string;
  bio: string;
  style: string;
  commissions: Commission[];
}

interface Commission {
  _id: string;
  name: string;
  description: string;
  title: string;
  price: number;
  due_date: string;
}

export default function EditCommission() {
  const { put } = useFetch();
  const navigate = useNavigate();
  const params = useParams();
  const outletContext = useOutletContext()
  const artist = (outletContext as { artist: any }).artist

  const commission: Commission | undefined = artist
    ? artist.commissions.find((c: Commission) => c._id === params.commissionId)
    : undefined;

  const handleSubmit = async (e: { preventDefault: () => void; target: { name: any; title: any; description: any; price: any; due_date: any; }; }) => {
    e.preventDefault()

    const {name, title, description, price, due_date} = e.target

    await put(`/commissions/${params.commissionId}`, {
      name: name.value,
      artist: artist._id,
      title: title.value,
      description: description.value,
      price: price.value,
      due_date: due_date.value
    })

    navigate(`/artists/${artist._id}`)
  }
  
  return (
 
    <CommissionForm
        legend='Update Commission'
        onSubmit={handleSubmit}
        formInputs={{
          name: commission?.name || '',
          description: commission?.description || '',
          title: commission?.title || '',
          price: commission?.price || 0,
          due_date: commission?.due_date || '',
        }}
    />
 
  );
}