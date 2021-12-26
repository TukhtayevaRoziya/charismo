import moduleName from './OurPartners.module.css'
import barbershop from './picture/barbershop.png'
// import barberTshop from './picture/barberT.jpeg'
import dessange from './picture/dessange.png'
import hairCare from './picture/hair_care.png'
import hairCare1 from './picture/hairCare1.png'
import TRZ from './picture/TRZ.png'
import worldClass from './picture/worldClass.png'

const OurPartners = () => {
    return (
        <div className={moduleName.body}>
            <div className={moduleName.our_partners}>
                <div>
                    <h1 className={moduleName.title}>Наши партнёры</h1>
                    <p className={moduleName.text}>признанные лидеры в своих областях</p>
                </div>
                <div className={moduleName.partners_icon}>
                    <img src={barbershop} alt="" />
                    <img src={dessange} alt="" />
                    <img src={worldClass} alt="" />
                    <img src={hairCare} alt="" />
                    <img src={hairCare1} alt="" />
                    <img className={moduleName.pictureTRZ} src={TRZ} alt="" />
                    <img src={barbershop} alt="" />
                    <img src={dessange} alt="" />
                </div>
            </div>
        </div>
    )
}

export default OurPartners
