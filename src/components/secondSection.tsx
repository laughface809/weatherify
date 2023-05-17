import { Dispatch, FC, SetStateAction } from "react";

interface UserProps {
    hover: number,
    setHover: Dispatch<SetStateAction<number>>,
    secondData: Array<string>,
    status: string,
    degree: string,
    feels: string,
    iconWeather: string
  }

const SecondSection: FC<UserProps > = ({
    hover,
    setHover,
    secondData,
    status,
    degree,
    feels,
    iconWeather
}): JSX.Element => {
    return(
        <>
        {/* SECOND SECTION */}
        {/**
         * @this is static data need one call API to implemented (Credit Card required)
         * read more: https://openweathermap.org/api/one-call-3
         */}
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="sm:text-center">
                <img src={iconWeather} alt="" className={`mt-[-6rem] relative left-0 m-auto ${iconWeather.includes('spinner') ? 'w-28' : 'w-96'}`} />
                <h2 className="text-3xl mt-[-6rem] font-extrabold text-gray-900 mb-4 tracking-tight sm:text-4xl text-center">{status}</h2>
                <h1 className="text-9xl font-extrabold text-gray-700 tracking-tight sm:text-8xl text-center">{degree ? Math.round(parseInt(degree)) : degree}{degree && '°C'}</h1>
                <h1 className="text-3xl font-extrabold text-cyan-500 mt-4 tracking-tight sm:text-4xl text-center">{feels && 'Feels Like:'} {feels ? Math.round(parseInt(feels)) : feels}{feels && '°C'}</h1>
            </div>
            <div className="md:flex mt-32 md:items-center md:justify-between">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">The Next 4 Hours (Coming Soon)</h2>
                <a className="hidden text-sm font-medium text-cyan-600 hover:text-cyan-500 md:block">Expand more<span aria-hidden="true"> &rarr;</span></a>
            </div>

            <div onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)} className={`mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8 ${hover == 1 && 'opacity-60'}`}>

                {hover == 1 &&
                <>
                <button className="absolute place-self-center bg-white border border-black border-solid p-4 z-10">Coming soon</button>
                </>
                }
                
                {secondData.map(() => {
                return(
                    <div className="group relative text-center">
                    <h3 className="text-5xl text-gray-700">
                        <a>
                        <span className="absolute inset-0"></span>
                        12 AM
                        </a>
                    </h3>
                    <p className="mt-1 text-2xl text-gray-500">67°C</p>

                    <div className="w-full rounded-md overflow-hidden group-hover:opacity-75 text-center relative left-0">
                        <img src="/animated/cloudy-day-1.svg" alt="Hand stitched, orange leather long wallet." className="object-center object-cover w-full h-48" />
                    </div>
                    
                    <p className="mt-1 text-2xl text-gray-500">Clouds</p>
                    <p className="mt-1 text-2xl text-gray-500">Feels Like: 69°C</p>
                    </div>
                )
                })}
                
            </div>

            <div className="mt-8 text-sm md:hidden">
                <a className="font-medium text-cyan-600 hover:text-cyan-500">Shop the collection<span aria-hidden="true"> &rarr;</span></a>
            </div>
        </div>
        </>
    )
}

export default SecondSection;