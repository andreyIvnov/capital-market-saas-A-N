import { useEffect, useState } from "react"
import { getMarketData } from "../services/marketApi";

function Dashboard() {
    const [borderColorsList, setBorderColorsList] = useState({ crystalGreen: "#00ff88", crystalRed: "#ff4444" });
    const [marketData, setMarketData] = useState([]);
    const [borderColor, setBorderColor] = useState(borderColorsList.crystalGreen);

    const loadData = async () => {
        const { data } = await getMarketData();
        setMarketData(data);
    }

    useEffect(() => {
        loadData();
    }, [])


    return (
        <>
            <div style={{ padding: "20px" }}>
                <h1>Market Dashboard</h1>

                <button onClick={() => setBorderColor(borderColor === borderColorsList.crystalGreen ? borderColorsList.crystalRed : borderColorsList.crystalGreen)}>Change Border Color</button>

                <div astyle={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20, marginTop: 20 }}>
                    {marketData.map((item, index) => {
                        return ( 
                            <div key={index + item.symbol} style={{ border: `2px solid ${borderColor}`, borderRadius: 12, padding: 20 }}>
                                <h2>{item.symbol}</h2>
                                <p>${item.price}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Dashboard    