import { useEffect, useState } from "react"
import{BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'
import './style.css'
export default function imageslider({ url, limit, page = 1 }) {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(null);
    const [errorMsg, setErrorMsg] = useState(false);

    async function fetchImages(getUrl) {


        try {
            setLoading(true);
            const response = await fetch(`${getUrl}? page=${page} &limit=${limit}`);
            const date = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }

    }
          function handlePrevious(){
            setCurrentSlide(currentSlide === 0? images.length-1 : currentSlide -1) 

          }
          function handleNext(){

          }

    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url]);

    if (loading) {
        return <div>loading data... please wait</div>
    }
    if (errorMsg !== null) {
        return <div>Error occured ! {errorMsg}</div>
    }

    return <div className="container">

      <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>
      {
        images && images.length? 
         images.map(imageItem=>(
            <img 
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className="current-image"
            />
         )

         )
        : null
      }

      <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
      <span className="circle-indicators">
        {
            images && images.length ? 
            images.map((_,index) => (<button key={index} className="current-indicator"></button>)) : null
        }


      </span>

    </div>

}