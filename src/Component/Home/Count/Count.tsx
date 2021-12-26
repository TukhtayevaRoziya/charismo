import moduleName from './Count.module.css'

export const Count = () => {
    return (
        <>
        <div className={moduleName.counter_container}>
            <i className={moduleName.fab + " " + moduleName.fa_twitter + " " + moduleName.fa_3x}></i>
            <div className={moduleName.counter} data-target='12000'></div>
            <span>Twitter Followers</span>
        </div>
        <div className={moduleName.counter_container}>
            <i className={moduleName.fab + " " + moduleName.fa_youtube + " " + moduleName.fa_3x}></i>
            <div className={moduleName.counter} data-target='5000'></div>
            <span>Youtube Subscribers</span>
        </div>
        <div className={moduleName.counter_container}>
            <i className={moduleName.fab + " " + moduleName.fa_facebook + " " + moduleName.fa_3x}></i>
            <div className={moduleName.counter} data-target='75000'>1 </div>
            <span>Facebook Fans</span>
        </div>
        
</>
    )
}
