"use client";
export const Header = () => {
    
    return (
        <div style={{display: "flex", justifyContent:"center"}}>
            <div style={{
                width: "1000px",
                 height: "250px",
                  padding: "20px",
                   display: "flex",
                    justifyContent: "space-between",
                     alignItems: "center",
                      border: "2px solid white",
                      borderRadius: "10px",

                   }}>
                <div className="header-text">
                    <h1>ROCK</h1>
                    <h1>PAPER</h1>
                    <h1>SCISSORS</h1>
                </div>
                <div className="score-board" style={{
                    width: "200px",
                     height: "200px",
                      backgroundColor: "white",
                       alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column",

                        borderRadius: "10px",
                       }}>
                    <p style={{color: "black", fontSize: "35px"}}>YOUR SCORE</p>
                    <p style={{color: "black", fontSize: "35px"}}>0</p>
                </div>
                <div className="score-board-system" style={{
                    width: "200px",
                     height: "200px",
                      backgroundColor: "white",
                       alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column",

                        borderRadius: "10px",
                       }}>
                    <p style={{color: "black", fontSize: "35px"}}>system score</p>
                    <p style={{color: "black", fontSize: "35px"}}>0</p>
                </div>
            </div>
        </div>
    )
}