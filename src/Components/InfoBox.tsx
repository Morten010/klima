import style from "./InfoBox.module.scss"

type InfoBoxProps = {
    article: {
        title: string;
        text: string[];
        image: string;
    }
}

export default function InfoBox({article}: InfoBoxProps) {
  return (
    <section className={style.infoBox}>
        <h3>
            {article.title}
        </h3>
        <div className={style.half}>          
            <div>
            {article.text.map((text, index) => (
                <p key={index}>
                    {text}
                </p>
            ))} 
            </div>
            <img src={article.image} alt="" />
        </div>
    </section>
  )
}
