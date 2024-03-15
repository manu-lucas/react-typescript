// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Card from '../Cards/Card';

export default function ScrollCard() {

  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full"
      >
        <SwiperSlide className="ml-6 "
>
        <Card title="Cuentas" total={0} />


        </SwiperSlide>
        <SwiperSlide>
        <Card title="Rentabilidad" total={0} conciliado={0} />
            </SwiperSlide>
        <SwiperSlide>
        <Card title="Gastos" total={0} otros={0} />


        </SwiperSlide>
        <SwiperSlide>
        <Card title="Documentos de venta" total={0} />


        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
