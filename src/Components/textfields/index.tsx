import style from "./Textfields.module.scss"

type NormalTextFieldProps = {
    article: {
        title: string
        text: string[]
    },
    backToTop?: boolean
}

export function NormalTextField({article, backToTop = false}: NormalTextFieldProps) {
  return (
    <section className={style.normalTextField}>
        <div className={style.top}>
            <h2>{article.title}</h2>
            {backToTop && (
                <a href="#top">
                    Tilbage til top
                </a>
            )}
        </div>
        {article.text.map((text, index) => (
            <p key={index}>
                {text}
            </p>
        ))}
    </section>
  )
}

export type Articles = [{
    title: string, 
    text: string[],
}, {
    title: string, 
    text: string[],
}]

export type DualTextFieldProps = {
    articles: Articles
}


export function DualTextField({articles}: DualTextFieldProps) {
    
    return(
        <section className={style.dualTextField}>
            {articles.map((article, index) => (
                <article key={index}>
                    <h2>{article.title}</h2>
                    {article.text.map((text, index) => (
                        <p key={index}>
                            {text}
                        </p>
                    ))}
                </article>
            ))}
        </section>
    )
}
