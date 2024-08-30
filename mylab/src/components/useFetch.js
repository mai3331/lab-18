import { useEffect,useState } from "react";

const useFetch=(url)=>{
    const [data,setData]=useState("");
    useEffect(()=>{
       setTimeout(()=>{
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                console.log(`Error ${res.status}`);
            }
            return res.json();
        })
        .then((data)=>{
            setData(data);
        })
        .catch((err)=>{
            console.log(err.message);
        });
       },2000)
    },[])
    return {data}
}
export default useFetch