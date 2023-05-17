import { Dispatch, FC, SetStateAction } from "react";

interface UserProps {
    hover: number,
    setHover: Dispatch<SetStateAction<number>>,
    thirdData: Array<string>
  }

const ThirdSection: FC<UserProps > = ({
    hover,
    setHover,
    thirdData
}): JSX.Element => {
    return(
        <>
        {/* THIRD SECTION */}
        {/**
         * @this is static data need one call API to implemented (Credit Card required)
         * read more: https://openweathermap.org/api/one-call-3
         */}
        <div className="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Extended Forecast (Coming Soon)</h2>
        </div>

        <div onMouseEnter={() => setHover(2)} onMouseLeave={() => setHover(0)} className={`mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8 ${hover == 2 && 'opacity-60'}`}>

            {hover == 2 &&
            <>
            <button className="absolute place-self-center bg-white border border-black border-solid p-4 z-10">Coming soon</button>
            </>
            }

        {thirdData.map(() => {
            return(
                <div className="group relative text-center">
                <h3 className="text-5xl text-gray-700">
                    <a>
                    <span className="absolute inset-0"></span>
                    Tomorrow
                    </a>
                </h3>
                <p className="mt-1 text-2xl text-gray-500">Rain 94%</p>
                <p className="mt-1 text-2xl text-gray-500">H 85°C / L 66°C</p>

                <div className="w-full rounded-md overflow-hidden group-hover:opacity-75 text-center relative left-0">
                    <img src="/animated/rainy-1.svg" alt="Hand stitched, orange leather long wallet." className="object-center object-cover w-full h-48" />
                </div>
                
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

export default ThirdSection;