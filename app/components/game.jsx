"use client";
import { useState } from "react";

export const Game = () => {
    const [secim, setSecim] = useState("");
    const [hasWinner, setHasWinner] = useState(false);
  
    const [result, setResult] = useState(null);
    const choices = ['Taş', 'Kağıt', 'Makas'];

    const makeRandomChoice = () => {
        const randomIndex = Math.floor(Math.random() * choices.length);
        setResult(choices[randomIndex]);
    };

    function handleSecim() {
        setSecim("taş")
        makeRandomChoice();
        if (secim === "taş" && result === "Makas") {
            setHasWinner("Kazandınız");
        }
        else if (secim === "taş" && result === "Kağıt") {
            setHasWinner("Kaybettiniz");
        }
        else if (secim === "taş" && result === "Taş") {
            setHasWinner("Berabere");
        }}

        
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center",}}>
            <div style={{
                display: "flex",
                gap: "20px",
                marginTop: "100px",
                alignItems: "center",
                justifyContent: "center",
                }}>,
                
                <button style={{width: "80px", height: "40px", border: "2px inset gray", borderRadius: "8px", }}
                onClick={handleSecim}>taş</button>

                <button style={{width: "80px", height: "40px", border: "2px inset white", borderRadius: "8px",}}
                onClick={() => {setSecim("kağıt")}}>kağıt</button>

                <button style={{width: "80px", height: "40px", border: "2px inset green", borderRadius: "8px",}}
                onClick={() => {setSecim("makas")}}>makas</button>
            </div>
             <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "50px",
                border: "2px inset white",
                borderRadius: "10px",
                width: "200px",
                height: "200px",
                
             }}>

                <span>kullanıcı:{secim} sistem:{result}</span>
                <span>{hasWinner}</span>
                    
            </div>
        </div>
    )
}