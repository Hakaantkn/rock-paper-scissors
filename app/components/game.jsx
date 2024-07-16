"use client";
import { useState, useEffect } from "react";

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
        }
    }

        function handleSecim2() {
            setSecim("kağıt");
            makeRandomChoice();
            if (secim === "kağıt" && result === "taş"){
                setHasWinner("Kazandınız");
            }
            else if (secim === "kağıt" && result === "makas"){
                setHasWinner("Kaybettiniz");
            }
            else if (secim === "kağıt" && result === "kağıt"){
                setHasWinner("Berabere");
            }
        }

        function handleSecim3() {
            setSecim("makas");
            makeRandomChoice();
            if(secim === "makas" && result === "taş"){
                setHasWinner("Kaybettiniz");
            }
            else if (secim === "makas" && result === "kağıt"){
                setHasWinner("kazandınız");
            }
            else if (secim === "makas" && result === "makas"){
                setHasWinner("Berabere");
            }
        }
        
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center",}}>
            <div style={{
                display: "flex",
                gap: "20px",
                marginTop: "100px",
                alignItems: "center",
                justifyContent: "center",
                }}>
                
                <button style={{width: "80px", height: "40px", border: "2px inset gray", borderRadius: "8px", }}
                onClick={handleSecim}>taş</button>

                <button style={{width: "80px", height: "40px", border: "2px inset white", borderRadius: "8px",}}
                onClick={handleSecim2}>kağıt</button>

                <button style={{width: "80px", height: "40px", border: "2px inset green", borderRadius: "8px",}}
                onClick={handleSecim3}>makas</button>
            </div>
             <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "30px",
                border: "2px inset white",
                borderRadius: "10px",
                width: "300px",
                height: "250px",
                flexDirection: "column",
                gap: "20px",

                
             }}>

                <span style={{fontSize: "20px", color: "green"}}>kullanıcı:{secim}</span>
                <span>----------------------------------------</span>
                <span style={{fontSize: "20px", color: "red"}}>sistem: {result}</span>
                <span>----------------------------------------</span>
                <span>{hasWinner}</span>
                    
            </div>
        </div>
    )
}