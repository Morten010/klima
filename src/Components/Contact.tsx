import style from "./Contacts.module.scss"
import { NormalTextField } from "./textfields"
import BigLogo from "../assets/UN-Logo-Large.png"
import { email, minLength, object, type Output, parse, string, maxLength, flatten } from 'valibot'; // 0.76 kB
import { useReducer }from "react"


const article = {
    title: "KONTAKT OS",
    text: ["Kontakt os og hør mere om De Sytten Verdensmål. Udfyld formularen herunder:"]
}

const ContactSchema = object({
    name: string("Name required.", [minLength(2, "Name must be atleast 2 charactes long")]),
    email: string("Email required.",[email("Need a real email.")]),
    text: string("Message required.", [minLength(10, "Message must be atleast 10 charactes long"), maxLength(200, "Message cannot be more than 200 characters long")])
});

type FormProps = {
    name?: string 
    email?: string 
    text?: string 
}

export default function Contact() {
    const [formState, formDispatch] = useReducer((prev: FormProps, next: FormProps) => {
        return {...prev, ...next}
    }, {
        name: "",
        email: "",
        text: ""
    })
    const [errorState, errorDispatch] = useReducer((prev: FormProps, next: FormProps) => {
        return {...prev, ...next}
    }, {
        name: "",
        email: "",
        text: ""
    })
    

    const handleForm = async (e: any) => {
        e.preventDefault()
        try{
            parse(ContactSchema, {
                ...formState
            })
            errorDispatch({
                name: "",
                email: "",
                text: ""
            })

        }catch(err: any){
            const errors = flatten(err).nested
            console.log(errors);
            
            const newErrors = {
                name: errors.name ? errors.name[0] : "",
                email: errors.email ? errors.email[0] : "",
                text: errors.text ? errors.text[0] : "",
            }
            errorDispatch(newErrors)
        }
    }

  return (
    <section>
        <NormalTextField article={article} backToTop />
        <div className={style.contact}>
            <img src={BigLogo} alt="" />
            <form onSubmit={handleForm}>
                <input 
                type="text" 
                placeholder="Indtast dit fulde navn"
                value={formState.name}
                className={errorState.name ? style.error : ""}
                onChange={(e) => {
                    formDispatch({name: e.currentTarget.value})
                }}
                />
                <input 
                type="text" 
                placeholder="Indtast gyldig E-mail"
                value={formState.email}
                className={errorState.email ? style.error : ""}
                onChange={(e) => {
                    formDispatch({email: e.currentTarget.value})
                }}
                />
                <textarea 
                placeholder="Evt. Besked"
                value={formState.text}
                className={errorState.text ? style.error : ""}
                onChange={(e) => {
                    formDispatch({text: e.currentTarget.value})
                }}
                />

                <div>
                    <button
                    type="button"
                    >
                        fortryd
                    </button>
                    <button>
                        send
                    </button>
                </div>
            </form>
        </div>
    </section>
  )
}
