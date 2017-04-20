import React from 'react'

const Card = () => (
  <div className='card-block clearfix' >
    <div className='card-header' >
      <div className='card-header-title' ># Общественное питание, Продажа</div>
      <div className='card-header-print' >
        <i className='fa fa-print' aria-hidden='true' />
        Печать
      </div>
    </div>
    <div className='card-content' >
      <div className='card-left-side' >
        <img className='image-responsive' src='https://hh.ru/employer-logo/1047489.jpeg' alt='logo' />
        <div className='card-item' >
          <strong>ШашлыкоFF</strong>
        </div>
        <div className='card-item' >
          <div className='gray' >стоимость франшизы</div>
          <strong>1 000 000 - 1 200 000 руб.</strong>
        </div>
        <div className='card-item' >
          Ссылка на источник:
          <div>
            <a href='' >Подробнее</a>
          </div>
        </div>
      </div>
      <div className='card-right-side' >
        <div className='col' >
          <div className='card-item' >
            Сумма инвестиции:
            <strong>
              8 000 000 - 16 000 000 руб.
            </strong>
          </div>
          <div className='card-item' >
            Срок окупаемости:
            <strong>
              9 - 24 месяца
            </strong>
          </div>
          <div className='card-item' >
            Роялти:
            <strong>
              5% от выручки
            </strong>
          </div>
          <div className='card-item' >
            Количество корпаративных / франшизных точек:
            <strong>
              8 000 000 - 16 000 000 руб.
            </strong>
          </div>
        </div>
        <div className='col' >
          <div className='card-item' >
            Контакты:
            <strong>
              Николай Панин
            </strong>
            <strong>
              +79898989898
            </strong>
            <strong>
              n.panin@sgroup.ru
            </strong>
          </div>
          <div className='card-item' >
            Минимальная площадь:
            <strong>
              220 - 330 кв.м
            </strong>
          </div>
          <div className='card-item' >
            Количество персонала:
            <strong>
              27 - 34 чел.
            </strong>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Cards = () => (
  <div>
    <Card />
    <Card />
    <Card />
  </div>
)

export default Cards
