import { useState } from "react"
import { useEffect } from "react"
import './scroll.css'

export default function ScrollIndicator({ url }) {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');
   const [scrollPercentage, setScrollPercentage] = useState(0);

   async function fetchdata(getUrl) {
      try {
         setLoading(true);
         const response = await fetch(getUrl);
         const data = await response.json();

         if (data && data.products && data.products.length > 0) {
            setData(data.products);
            setLoading(false);
         }

      }
      catch (e) {

      }

   }

 


   useEffect(() => { fetchdata(url); }, [url]);

   function handleScrollPercentage() {
      console.log(
        document.body.scrollTop,
        document.documentElement.scrollTop,
        document.documentElement.scrollHeight,
        document.documentElement.clientHeight
      );
  
      const howMuchScrolled =
        document.body.scrollTop || document.documentElement.scrollTop;
  
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
  
      setScrollPercentage((howMuchScrolled / height) * 100);
      
    }
    useEffect(() => {
      window.addEventListener("scroll", handleScrollPercentage);
  
      return () => {
        window.removeEventListener("scroll", () => {});
      };
    }, []);
  
    console.log(data, scrollPercentage);
  


   return <div>
      <div className="top-container">

      <h1>custom scroll indicator</h1>
      <div className="scroll-progress-tracking-container">
         <div className="current-progress-bar" style={{width: `${scrollPercentage}%`}}>

         </div>
      </div>


      </div>
      
      <div className="data-container">
         {
            data && data.length > 0 ?
               data.map((dataItem) => <p>{dataItem.title}</p>) : null
         }
      </div>

   </div>

}