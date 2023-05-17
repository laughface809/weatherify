import {useEffect, useState} from "react"
import SecondSection from "./components/secondSection"
import ThirdSection from "./components/thirdSection"
import axios from "axios"
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';


function App() {

  const secondData = Array(4).fill('')
  const thirdData = Array(8).fill('')

  const [hover, setHover] = useState<number>(0)
  const [dataLocation, setDataLocation] = useState<string>('Indonesia')
  const [status, setStatus] = useState<string>('')
  const [degree, setDegree] = useState<string>('')
  const [feels, setFeels] = useState<string>('')
  const [iconWeather, setIconWeather] = useState<string>('')

  function checkIcon(e: string) {
    const path = '/animated/'
    switch(e) {
      case 'Thunderstorm':
        setIconWeather(path + 'thunder.svg')
      break;
        case 'Drizzle':
          setIconWeather(path + 'rainy-4.svg')
        break;
          case 'Rain':
            setIconWeather(path + 'rainy-7.svg')
          break;
            case 'Snow':
              setIconWeather(path + 'snowy-6.svg')
            break;
              case 'Clear':
                setIconWeather(path + 'day.svg')
              break;
                case 'Clouds':
                  setIconWeather(path + 'cloudy-day-3.svg')
                break;
                  default:
                  setIconWeather(path + 'cloudy.svg')
    }
  }

  function gettingWeather(e: string) {
    // there is another way to secure api key for openweathermap, but no need implement now
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${dataLocation}&units=metric&exclude=minutely&appid=342e24460b455c8c9fa37798d0391e9d`).then((res) => {
      if(res.statusText === "OK"){
        const data = res.data
        if(e !== 'render'){
          toast.success(`Success get data ${data.name}`, {
            position: toast.POSITION.TOP_RIGHT
          });    
        }
        setDegree(data.main.temp)
        setFeels(data.main.feels_like)

        // Read more type of weather on here https://openweathermap.org/weather-conditions
        setStatus(data.weather[0].main)
        checkIcon(data.weather[0].main)
      }
    }).catch((e) => {
      toast.error(`${e.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT
      }); 
    })
  }

  useEffect(() => {
    gettingWeather('render')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="bg-cyan-50">
      <ToastContainer />

      <main>

        <div className="relative mt-4 sm:mt-4 sm:py-16">

          <div aria-hidden="true" className="hidden sm:block">
            <svg className="absolute top-8 left-1/2 -ml-3" width="404" height="392" fill="none" viewBox="0 0 404 392">
              <defs>
                <pattern id="8228f071-bcee-4ec8-905a-2a059a2cc4fb" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
            </svg>
          </div>
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative px-6 py-10 bg-white overflow-hidden shadow-xl sm:px-12 sm:py-20">
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">The great latest weather status.</h2>
                  <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-700">
                    weatherify is a typical weather app but with a more relaxed
                  </p>
                </div>
                <div className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="cta-email" className="sr-only">Email address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg className="text-gray-500" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </div>
                        <input value={dataLocation} onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            gettingWeather('button')
                          }
                        }} type="search" onChange={(e) => setDataLocation(e.target.value)} id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-500 focus:border-cyan-500 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="Search Location..." required />
                        <button onClick={() => gettingWeather('button')} className="text-white absolute right-2.5 bottom-2.5 bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Search</button>
                      </div>
                  </div>
                </div>
              </div>
              
              <SecondSection 
                hover={hover}
                setHover={setHover}
                secondData={secondData}
                status={status}
                degree={degree}
                feels={feels}
                iconWeather={iconWeather}
              />

              <ThirdSection
                hover={hover}
                setHover={setHover}
                thirdData={thirdData}
              />

            </div>
          </div>
        </div>

      </main>

    </div>
  )
}

export default App
