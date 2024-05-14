import { useEffect } from "react";
import { useState } from "react";
import PhoneCard from "../Phone/PhoneCard"



const Favorite = () => {

    const [favorite, setFavorite] = useState([]);

    const [noFound, setNoFound] = useState(false);

    const [isShow, setIsShow] = useState(false)

    const [totalPrice, setTotalPrice] = useState()

    // const [dataLength, setDataLength] = useState(2);

    useEffect(() =>{
        const favoriteItem = JSON.parse(localStorage.getItem('favorites'));
        if (favoriteItem) {
            setFavorite(favoriteItem);

            const total = favoriteItem.reduce((preValue,currentItem) => preValue + currentItem.price,0)
            setTotalPrice(total)

        }
        else{
            setNoFound("Data is not available in favorite item !!!")
        }
    },[])

    const handleRemove = () =>{
        localStorage.clear()
        setFavorite([])
    }

    return (
        <div className="items-center justify-center">
            {/* Remove All Button */}
            {
                    favorite.length > 0 && <button onClick={handleRemove} className="px-5 py-1 bg-green-300 text-black items-center justify-center text font-bold  rounded-lg block mx-auto">Delete All Favorites</button>
            }
            <div>
                <h3 className="text-black font-semibold text-xl">Total Price: {totalPrice}</h3>
                <br />
            </div>
            <div className="flex ">
            {
            noFound ? <p>{noFound}</p> :  
            <div className="grid grid-cols-2 gap-5 items-center text-center">
                {
                    isShow ? favorite.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                    : 
                    favorite.slice(0,2).map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                }
            </div>
            }
            </div>
            <br />
            
                {
                    favorite.length > 2 && <button onClick={() => setIsShow(!isShow)} className="px-5 py-1 bg-green-300 text-black items-center justify-center text font-bold  rounded-lg block mx-auto"
                    >{isShow ? "See Less" : "See More"}</button>
                }
            
        </div>
    );
};

export default Favorite;