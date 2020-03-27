import React, { useState } from "react";
import { WaveLoading } from "react-loadingg";

import { useFetch } from "./hooks/";

function App() {
  const [country, setCountry] = useState("iran");
  const [today, setToday] = useState(false);
  const [loading, data, error] = useFetch(country);

  const changeCountry = event => setCountry(event.target.value);
  const showToday = () => setToday(!today);
  console.log(data);
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
        <div className="max-w-md rounded overflow-hidden shadow-lg h-auto bg-white">
          <img
            className="w-full"
            src="https://miro.medium.com/max/10568/1*CIQbq-xmRUVxp1kNrO6tsg.jpeg"
            alt="Sunset in the mountains"
          />
          <div className="relative flex-row-reverse flex p-2">
            <select
              className="flex align block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={changeCountry}
            >
              <option value="iran">ایران</option>
              <option value="france">فرانسه</option>
              <option value="germany">آلمان</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
            <div className="py-3 px-4">
              <span className="text-sm mr-2">!آمار امروز</span>
              <input
                onClick={showToday}
                className="mr-2 leading-tight"
                type="checkbox"
              />
            </div>
          </div>
          <div className="px-6 py-4 text-center">
            <div className="mb-2 font-semibold text-base text-right">
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
            {today && (
              <>
                <div className="mb-2 font-semibold text-base text-right">
                  آمار امروز
                </div>
                <div className="flex mb-4 flex-row-reverse">
                  <div className="w-1/3 h-12 font-bold text-base text-gray-600">
                    مبتلایان
                  </div>
                  <div className="w-1/3 h-12 font-bold text-base text-gray-600"></div>
                  <div className="w-1/3 h-12 font-bold text-base text-gray-600">
                    درگذشتگان
                  </div>
                </div>
                <div className="flex mb-4 flex-row-reverse">
                  <div className="w-1/3 h-12 text-base">
                    {data.specificCountry.todayCases}
                  </div>
                  <div className="w-1/3 h-12 text-base"></div>
                  <div className="w-1/3 h-12 text-base">
                    {data.specificCountry.todayDeaths}
                  </div>
                </div>
              </>
            )}
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
