import Gallery from "../Components/Gallery";
import { DualTextField, NormalTextField } from "../Components/textfields";
import { delsmaalene, dual1, info, udfordringer, verdensmaal } from "../constants";
import InfoBox from "../Components/InfoBox";
import Contact from "../Components/Contact";

export default function Homepage() {
  return (
    <div className="container">
        <NormalTextField article={verdensmaal} />
        <DualTextField articles={dual1} />
        <NormalTextField article={delsmaalene} backToTop={true}/>
        <Gallery />
        <NormalTextField article={udfordringer} backToTop={true} />
        <div>
          {info.map(article => (
            <InfoBox key={article.title} article={article} />
          ))}
          <Contact />
        </div>
    </div>
  )
}
