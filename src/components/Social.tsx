import Link from "next/link"
import {FaGithub,FaLinkedinIn} from "react-icons/fa"



const socials = [
    {
        icon : <FaGithub /> , path : 'https://github.com/ArthurTZ'
    },
    {
        icon : <FaLinkedinIn /> , path : 'https://www.linkedin.com/in/pedro-arthur-dev/'
    }
]



export default function Socials({containerStyles , iconStyles} : {containerStyles? : string, iconStyles? : string}){
    return (
        <div className={containerStyles}>
            {socials.map((item, index) =>{
                return <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            })}
        </div>
    )
}