import { useEffect,useState } from "react";

const useFetch=(url)=>{
    const [data,setData]=useState("");
    const[pending,setIsPending]=useState(true)
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
            setIsPending(false);
        })
        .catch((err)=>{
            console.log(err.message);
            setIsPending(false)
        });
       },2000)
    },[])
    return {data, pending}
}
export default useFetch