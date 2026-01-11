import { BookOpen } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Izd = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Категория</th>
              <th>Название</th>
              <th>Дата создания</th>
              <th>Рейтинг</th>
              <th>Оценка</th>
              <th>Полный текст / видео</th>
              <th>Ссылка на статью</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Старые хроники</td>
              <td>Раиль и Аяз</td>
              <td>2019</td>
              <td>18+</td>
              <td></td>
              <td>
                <Link className="btn ml-10 btn-primary" to="/texts/one">
                  <BookOpen />
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <th>2</th>
              <td>Старые хроники</td>
              <td>Девочки 11-13 лет</td>
              <td>2021</td>
              <td>16+</td>
              <td></td>
              <td>
                <Link className="btn ml-10 btn-primary" to="/texts/two">
                  <BookOpen />
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <th>3</th>
              <td>Старые хроники</td>
              <td>Мальчики 11-13 лет (Фанаты Девочек 11-13 лет)</td>
              <td>2021</td>
              <td>18+</td>
              <td></td>
              <td>
                <Link className="btn ml-10 btn-primary" to="/texts/three">
                  <BookOpen />
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
        <th>4</th>
        <td>Старые хроники</td>
        <td>Мальчики 11-13 лет (Банька)  </td>
        <td>2021</td>
        <td>18+</td>
        <td></td>
        <td><Link className='btn ml-10 btn-primary' to='/texts/four'><BookOpen /></Link></td>
        <td></td>
      </tr>
            {/*
      <tr>
        <th></th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><Link className='btn ml-10 btn-primary' to='/texts/'><BookOpen /></Link></td>
        <td></td>
      </tr>
      */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Izd;
