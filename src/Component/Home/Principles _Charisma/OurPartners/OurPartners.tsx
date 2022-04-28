import moduleName from './OurPartners.module.css'
import barbershop from './picture/barbershop.png'
// import barberTshop from './picture/barberT.jpeg'
import dessange from './picture/dessange.png'
import hairCare from './picture/hair_care.png'
import hairCare1 from './picture/hairCare1.png'
import TRZ from './picture/TRZ.png'
import worldClass from './picture/worldClass.png'
import 'aos/dist/aos.css';

const OurPartners = () => {

	const map2 = [
		{ img: dessange },
		{ img: hairCare },
		{ img: hairCare1 },
		{ img: TRZ },
		{ img: worldClass },
		{ img: barbershop },
	]
	const map3 = map2.map(a => <div key={a.img} className={moduleName.slide}>
		<img src={a.img} alt="" />
	</div>)
    return (
        <div className={moduleName.body}>
            <div className={moduleName.our_partners}>
                <div>
                    <h1 className={moduleName.title}>Наши партнёры</h1>
                    <p className={moduleName.text}>признанные лидеры в своих областях</p>
                </div>
                <div className={moduleName.partners_icon}>
                    <div className={moduleName.contrubutor_sec}>
                        <div className={moduleName.slider}>
                            <div className={moduleName.slide_track}>
                                {map3}
                                {map3}
                                {/* {map3} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurPartners
