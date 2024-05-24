import { BiMenu } from "react-icons/bi";
export default function Header() {
  return (
<div className='header'>
        <div className='header__layout'>
             <div className='header__layout__icon'>
             <div 'header__layout__icon__circle'></div>
             <div> <BiMenu /> </div>
             </div >
             <div className='header__layout__info'></div>
       </div>
</div>
  )
}
