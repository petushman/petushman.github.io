import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/1_2.png)",
        }}
        className="hero min-h-screen"
      >
        
        <div className="hero-content text-center">
          <div className="max-w-md">

            <div className="rounded-xl bg-base-300 ">
              <h1 className="text-5xl text-shadow-lg font-bold">
                Начнем с того, каким раком ты тут вообще оказался
              </h1>
              <p className="my-6 p-3">
                Ну, а так, у тебя есть разделы, на которые ты можешь нажать и
                почитать, что там написано. Если в кратце, это наши долголетние
                труды, по созданию полной херни, но! Они Как вино, с каждым
                годом становятся все лучше и лучше !
              </p>
            </div>
            <div className="border-2 bg-base-300 mb-6 p-6 rounded-xl border-base-300">
              <p className="pb-2">
                Нажимая на кнопочку "История" Ты попадешь на историю создания
                всго этого цирка уродов
              </p>
              <Link to="/history" className="btn  btn-primary">
                История
              </Link>
            </div>
            <div className="border-2 bg-base-300 p-6 rounded-xl border-base-300">
              <p className="pb-2">
                Нажимая на кнопочку "Издания" Ты попадешь на список всех
                изданных произведений говяного искусства
              </p>
              <Link to="/izd" className="btn btn-primary">
                Издания
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
