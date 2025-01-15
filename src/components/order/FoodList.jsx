import React from 'react';

const yemekler = [
  {
    id: 1,
    isim: 'Karışık Izgara',
    adet: '1 Adet',
    fiyat: '180 ₺',
    resim: 'assets/image/ana_yemek.svg'
  },
  {
    id: 2,
    isim: 'Karışık Izgara',
    adet: '1 Adet',
    fiyat: '180 ₺',
    resim: 'assets/image/ana_yemek.svg'
  },
  {
    id: 3,
    isim: 'Karışık Izgara',
    adet: '1 Adet',
    fiyat: '180 ₺',
    resim: 'assets/image/ana_yemek.svg'
  },
  {
    id: 4,
    isim: 'Karışık Izgara',
    adet: '1 Adet',
    fiyat: '180 ₺',
    resim: 'assets/image/ana_yemek.svg'
  }
];

export default function FoodList() {
  return (
    <div className='line-throught'>
      <div className='food-list'>
        {yemekler.map((yemek) => (
          <div key={yemek.id}>
            <div className='food-list__item'>
              <figure className='food-list__item__img'>
                <img src={yemek.resim} alt="food-img" />
              </figure>
              <div>
                <div className='food-list__item__header'>
                  <span className='food-list__item__header__title'>{yemek.isim}</span>
                  <span className='food-list__item__header__count'>{yemek.adet}</span>
                </div>
              </div>
              <div className='food-list__item__price'>{yemek.fiyat}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
