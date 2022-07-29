import axios from "axios";
import { useEffect, useState } from "react";

//components
import Product from "../../components/Product";

import "./home.css";

export default function HomePage(){
    const [data, setData] = useState(null);

    const getData = () => {
        axios.get("http://127.0.0.1:5000/products").then((res) => {
            setData(res.data);
        }).catch(e => console.log(e));
    }

    useEffect(()=> {
        getData()
    },[])

    if(data){
        return(
            <div className="home-root-container">
                {data.map((obj,i)=> (
                    <Product data={obj} key={obj.id}/>
                ))}
            </div>
        )
    }else{
        return(
            <h2>Loading</h2>
        )
    }
    
}