import { useEffect, useState } from "react";
import { preLoaderAnim } from './animate.jsx';

const PreLoader = () => {
    const [showTag, setShowTag] = useState(true);

    useEffect(() => {
        preLoaderAnim();
        const timer = setTimeout(() => {
            setShowTag(false);
        }, 3900);
      
          // Clean up the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="preloader z-50 bg-primary">
            <div className="sm:hidden xs:hidden lg:flex ">
                {showTag && (
                <span className="text-white/25 mr-5">@manish Portfolio | </span>
                )}            
            </div>
            <div className="texts-container">
                <span>Developer,</span>
                <span>Curator,</span>
                <span>Vibes.</span>
            </div>
        </div>
    );
};

export default PreLoader;