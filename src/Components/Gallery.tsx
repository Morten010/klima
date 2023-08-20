import {
    GoalCleanEnergy,
    GoalCleanWater,
    GoalClimateAction,
    GoalDecentWork,
    GoalGenderEquality,
    GoalGoodEducation,
    GoalGoodHealth,
    GoalIndustry,
    GoalInequalities,
    GoalInstitutions,
    GoalLifeLand,
    GoalLifeWater,
    GoalNoHunger,
    GoalNoPoverty,
    GoalPartnership,
    GoalResponsibleConsumption,
    GoalSustainableCities,
    GlobalGoals,
} from "../assets/Goals"
import style from "./Gallery.module.scss"

const imageArray = [
    GoalCleanEnergy,
    GoalCleanWater,
    GoalClimateAction,
    GoalDecentWork,
    GoalGenderEquality,
    GoalGoodEducation,
    GoalGoodHealth,
    GoalIndustry,
    GoalInequalities,
    GoalInstitutions,
    GoalLifeLand,
    GoalLifeWater,
    GoalNoHunger,
    GoalNoPoverty,
    GoalPartnership,
    GoalResponsibleConsumption,
    GoalSustainableCities,
    GlobalGoals,
]

export default function Gallery() {
  return (
    <section className={style.gallery}>
        <h3>
            Se eksempler på enkelte delmål her:
        </h3>
        <div>
            {imageArray.map((image, index) => (
                <img src={image} key={index} alt="" />
            ))}
        </div>
    </section>
  )
}
