import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function TheBirthdayLetter() {
    const navigate = useNavigate();
    const [popupImage, setPopupImage] = useState(null);

    const openPopup = (imageSrc) => {
        setPopupImage(imageSrc);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div className="app">
            <div className="paper">
                <div className="letter">
                    <p>Helloooo, happy birthday my loveee!</p>
                    
                       You're 16 today yippie! I'm really thankful that you came into my life and you have made me really happy
                       even when we were still friends. I know we haven't been together for that long but can you believe it, already 1 month
                       of us together at the time I'm writing this. Thank you so much for being so patient with me and for 
                       being understanding, thank you for sticking with me even when we have rare disagreements. I love you so much and i hope you enjoy today, you deserve it! I LOVE YOU RAKPIANNNN!! 
                       p.s I wonder if we're ever gonna meet irl, but i sure hope it happens!
                    <p>   
                    </p>
                    <p style={{ textAlign: "right" }}>with love,</p>
                    <p style={{ textAlign: "right" }}>Sua/Lee/Franceen :P</p>
                </div>
            </div>

        

            <button className="btn" onClick={() => navigate("/")}>
                That's It!
            </button>

            {popupImage && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img src={popupImage} alt="Popup" className="popup-image" />
                        <button className="close-btn" onClick={closePopup}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TheBirthdayLetter;
