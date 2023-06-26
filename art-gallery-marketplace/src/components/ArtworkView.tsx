import './css/images.css'
import useFetch from './custom-hooks/useFetch';
import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CartContext } from './context/CartContext';

type CartItem = {
    _id: string;
    title: string;
    pic: string;
    description: string;
    price: number;
    quantity: number;
  };

interface CartAddItem {
    _id: string;
    title: string;
    price: number;
    quantity: number;
  }
  


export default function ArtworkView() {
  
    const { get, remove } = useFetch()
    const [image, setImage] = useState<Record<string, any> | null>(null); // Set type assertion for image state
    const [artist, setArtist] = useState<Record<string, any>[]>([]);
    const params = useParams()
    const navigate = useNavigate()

    const handleDelete = async () => {
        await remove(`/artworks/${params.id}`)
        navigate('/artworks')
    }

    useEffect(() => {
        (async () => {
            const imageData = await get(`/artworks/${params.id}`);
            setImage(imageData)
        })()
    }, [get, params.id, image]);

    // This could be avoided with some backend changes, works as a temp fix
    useEffect(() => {
        (async () => {
            if (image && image.artist) {
              const artistData = await get(`/artists/${image.artist}`);
              setArtist(artistData);
            }
        })()
    }, [get, params.id])

    
    const cartContext = useContext(CartContext); // Get the CartContext

    const handleCartAdd = (item: CartItem) => {
        if (item && item._id && item.title && item.price && item.pic) {
          const cartItem: CartItem = {
            _id: item._id,
            title: item.title,
            pic: item.pic,
            description: item.description,
            price: item.price,
            quantity: 1,
          };
          cartContext.handleCartAdd(cartItem);
        }
      };
      
      

    return <div>
        <div className='d-flex'>
            <div className='art-container'>
                <img style={{ 'marginLeft': 'auto', 'marginRight': 'auto', 'float': 'left', 'height': '100%', 'width': '100%' }} src={image?.pic} className='center' alt="Imge" />
            </div>
            <div className='art-container my-5' >
                <h1 className="text-light">{image?.title}</h1>
                <p className="text-light view-para">{image?.description}</p>
                <h3 className="text-light">{artist[0]?.name}</h3>
                <h5 className="text-light">Size: {image?.size}</h5>
                <h5 className="text-light">Year: {image?.year}</h5>
                <h5 className="text-light">Style: {image?.style}</h5>
                <h5 className="text-light">Price: ${image?.price}</h5>
                <h5 className="text-light">Copies: {image?.copies}</h5>
                <h5 className="text-light">Sold: {image?.sold}</h5>
                <button className="btn btn-primary" 
                onClick={() =>
                    handleCartAdd({
                      _id: image?._id,
                      title: image?.title,
                      pic: image?.pic,
                      description: image?.description,
                      price: image?.price,
                      quantity: 1,
                    })
                  }>
                    Add to cart</button>
            </div>
        </div>
        <hr />
        <div className="d-flex justify-content-center gap-3">
            <Link to={`/artworks/update/${params.id}`}>
                <button className="btn btn-primary">Update Profile</button>
            </Link>
            <button className="btn btn-danger" onClick={handleDelete}>Delete Artwork</button>
        </div>
    </div>
}
