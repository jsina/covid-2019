import React from "react";
import { WaveLoading } from "react-loadingg";

import { useFetch } from "./hooks/";

function App() {
  const [loading, data, error] = useFetch("iran");
  console.log(loading, data, error);
  return (
    <div
      className="flex justify-center items-center bg-local h-screen bg-no-repeat bg-center bg-contain"
      style={{
        backgroundImage: `url(${require("./iran.png")})`
      }}
    >
      {loading && !data ? (
        <WaveLoading />
      ) : (
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-auto bg-white">
          <img
            className="w-full"
            src="https://miro.medium.com/max/10568/1*CIQbq-xmRUVxp1kNrO6tsg.jpeg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-base mb-2 text-right">
              آمار لحظه‌ای ویرویس کرونا
            </div>
            <div className="flex mb-4 flex-row-reverse">
              <div className="w-1/3 h-12 font-bold text-base text-gray-600">
                مبتلایان
              </div>
              <div className="w-1/3 h-12 font-bold text-base text-gray-600">
                بهبود یافتگان
              </div>
              <div className="w-1/3 h-12 font-bold text-base text-gray-600">
                درگذشتگان
              </div>
            </div>
            <div className="flex mb-4 flex-row-reverse">
              <div className="w-1/3 h-12 text-base">
                {data.specificCountry.cases}
              </div>
              <div className="w-1/3 h-12 text-base">
                {data.specificCountry.recovered}
              </div>
              <div className="w-1/3 h-12 text-base">
                {data.specificCountry.deaths}
              </div>
            </div>
            <p className="text-gray-700 text-base text-right">
              <span>شستشوی دستها با آب و صابون🧼</span>
              <br></br>
              <span>پوشاندن دهان و بیتی به هنگام عطسه🤧</span>
              <br></br>
              <span>خودداری از تماس نزدیک با افراد⛔</span>
              <br></br>
              <span>پخت کامل غذا🍲</span>
            </p>
          </div>
          <div className="px-6 py-4 text-right">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              امید 🌱
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              عشق 💚
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              بهداشت 🧴
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
