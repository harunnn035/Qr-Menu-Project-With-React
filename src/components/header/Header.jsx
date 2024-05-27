import { BiMenu } from "react-icons/bi";


export default function Header() {
  return (
<div className='header'>
        <div className='header__layout'>
             <div className='header__layout__icon'>
              <BiMenu /> 
             </div >
             <div className='header__layout__info'>
             <div className="flex gap-20 header__layout__info__clock">
              <div>
                <div>Açılış Saati:</div>
                <div>Kapanış Saati:</div>
              </div>
              <div>
                <div>9:00</div>
                <div>23:30</div>
              </div>
              </div>
              <div className="header__layout__info__address" >AdresAdresAdresAdresAdres
                AdresAdresAdresAdresAdresAdres</div>
                
             </div>
       </div>
       <div className="header__lang">TR</div>
</div>
  )
}
