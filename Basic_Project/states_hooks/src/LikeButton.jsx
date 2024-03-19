import { useState } from "react";
import { useCallback } from "react";

export default function LikeButton(){
    const [like,isLike]=useState(false);
    let islikebtn=()=>{
        isLike(!like);

    }
    let colorHeart={color:"red"};
    
    return(
        <>
        <div>
            <p>Please Press the Like Button</p>
            
            <p onClick={islikebtn}>{like ? <i className="fa-solid fa-heart" style={colorHeart}></i> : <i className="fa-regular fa-heart" ></i>}</p>
        </div>
        </>
    );
}