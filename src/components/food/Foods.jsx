import React from 'react';

const yemekler = [
  {
    id: 1,
    fiyat: '180 ₺',
    isim: 'Karışık Izgara',
    resim: 'assets/image/ana_yemek.svg',
    icindekiler: ['Adana Kebap', 'Tavuk Izgara', 'Lahmacun', 'Kuşbaşı']
  },
  {
    id: 2,
    fiyat: '180 ₺',
    isim: 'Karışık Izgara',
    resim: 'assets/image/ana_yemek.svg',
    icindekiler: ['Adana Kebap', 'Tavuk Izgara', 'Lahmacun', 'Kuşbaşı']
  },
  {
    id: 3,
    fiyat: '180 ₺',
    isim: 'Karışık Izgara',
    resim: 'assets/image/ana_yemek.svg',
    icindekiler: ['Adana Kebap', 'Tavuk Izgara', 'Lahmacun', 'Kuşbaşı']
  },
  

  
];

export default function Foods() {
  return (
    <div className="snack-container">
      {yemekler.map((yemek) => (
        <div className="foods-container">
          <div className="food-left">{yemek.isim}</div>
          <div className="food-right">{yemek.fiyat}</div>
        </div>
      ))}
    </div>
  );
}
