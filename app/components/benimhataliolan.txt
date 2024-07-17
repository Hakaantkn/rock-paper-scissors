"use client";
import { useState, useEffect } from "react";

export const Game = () => {
    const [secim, setSecim] = useState("");
    const [hasWinner, setHasWinner] = useState("");
    const [result, setResult] = useState("");
    const choices = ['Taş', 'Kağıt', 'Makas'];


    const makeRandomChoice = () => {
        const randomIndex = Math.floor(Math.random() * choices.length);
        setResult(choices[randomIndex]);
    };

    useEffect(() => {
        if (secim) {
            const computurChocie = makeRandomChoice();

            const winner = determineWinner(secim, computurChocie);
            setHasWinner(winner);

        }
    },[secim]);
    
    
    const determineWinner = (userChoice, computurChocie) => {
        if(
            (userChoice === "taş" && computurChocie === "taş") ||
            (userChoice === "kağıt" && computurChocie === "kağıt") ||
            (userChoice === "makas" && computurChocie === "makas")
        ) {
            hasWinner("berabere");
        }
        else if(
            (userChoice === "taş" && computurChocie === "makas") ||
            (userChoice === "kağıt" && computurChocie === "taş") ||
            (userChoice === "makas" && computurChocie === "kağıt")
        ) {
            setHasWinner("kazandın");
        } else {
            setHasWinner("kaybettin");
        }
    };

    
    const handleSecim = (chocie) => {
        setSecim(chocie);
    };
    console.log(result);
    console.log(hasWinner);
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
                onClick={() => handleSecim("taş")}>taş</button>

                <button style={{width: "80px", height: "40px", border: "2px inset white", borderRadius: "8px",}}
                onClick={() => handleSecim("kağıt")}>kağıt</button>

                <button style={{width: "80px", height: "40px", border: "2px inset green", borderRadius: "8px",}}
                onClick={() => handleSecim("makas")}>makas</button>
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