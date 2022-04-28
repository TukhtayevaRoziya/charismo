import { Route } from 'react-router'
import { FC } from 'react'

import { Principles_Charisma } from './Principles _Charisma/Principles_Charisma'
import { Main_Header, BlueNavbar } from './Main_Header/Main_Header'
import Professional from './Professional/Professional'
import { Header_sm } from './Header_sm/Header_sm'
import { Navlink } from '../../Acronyms/NavLink'
import PageEnd from './PageEnd/PageEnd'

import moduleName from './Home.module.css'


type PropsType = {
    isAuth: boolean
    name: string
    UpdateIsAuthAC: (isAuth: boolean) => void
}
type UserPropsType = {
    name: string
    UpdateIsAuthAC: (isAuth: boolean) => void
}

const UserInfo = (props: UserPropsType) => {
    const Logout = () => {
        props.UpdateIsAuthAC(false)
    }
    return <h5 className={moduleName.Menu_Item} onClick={Logout}> <b>{props.name[0]}</b></h5>
}

const Home: FC<PropsType> = ({ isAuth, name, UpdateIsAuthAC }) => {
    return (
        <>
            <div className={moduleName.Header}>
                <header className={moduleName.header}>
                    <div className={moduleName.header_1}>
                        <Navlink href="/" LinkName="Партнерам" />
                        <Navlink href="/" LinkName="Центр обучения" />
                        <Navlink href="/" LinkName="Вопросы и ответы" />
                        <Navlink href="/" LinkName="Доставка и оплата" />
                    </div>
                    <div className={moduleName.header_2}>
                        {isAuth
                            ? <UserInfo name={name} UpdateIsAuthAC={UpdateIsAuthAC} />
                            : <Navlink href="/login" LinkName={'kirish'} />
                        }
                        <Navlink href="/" LinkName="Реферальная программа" />
                    </div>
                </header>
                <Header_sm />
                <BlueNavbar />
                <Route exact path='/charismo' render={() => <Main_Header />} />
                <Route exact path='/charismo' render={() => <Principles_Charisma />} />
                <Route exact path='/charismo' render={() => <Professional />} />
                <Route exact path='/charismo' render={() => <PageEnd />} />
            </div>
        </>
    )
}

export default Home


// function mountNode(arg0: JSX.Element, mountNode: any) {
//     throw new Error('Function not implemented.');
// }
/*  const send = () => {
    const a = {
        id: korzinas.length + 1,
        name: "koka",
        src: korzina,
        sum: 900

    }
    korzinas.push(a)
}  <div>
     <img src={sideIcon} alt="" />
     <h1>narxi:4000</h1>
     <button onClick={send} >send</button>
</div>

<div>
    <img src={sideIcon} alt="" />
    <h1>narxi:5000</h1>
    <button>send</button>
</div>

<div>
    <img src={korzina} alt="" />
    <h1>narxi:6000</h1>
    <button>send</button>
</div>

<div>
    <img src={korzina} alt="" />
    <h1>narxi:9000</h1>
    <button> send</button>
</div> */