import "@fontsource/poppins";

function Home() {
    return (
        <>
            <div id="header"style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "8vh",
                backgroundColor: "#beabe0",
                color: "#6b4aa5",
                fontFamily: "Poppins",
                fontSize: "2rem",
                fontWeight: "bold"    
            }}>
            <img src="https://static.thenounproject.com/png/423483-200.png" 
                alt=""
                width="40rem"
                style={{ marginRight:"2rem"}} />
                Homepage
            </div>

            <div style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center"
            }}>
                <div>
                    <div style={{
                        width: "80vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontFamily: "Poppins",
                    }}>
                        <h2>Homepage </h2>
            
                    </div>

                    <div style={{
                        width: "80vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <img
                            src="src/assets/imgs/Coding.gif"
                            alt="Imagem da Página Home"
                            width="500rem"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;