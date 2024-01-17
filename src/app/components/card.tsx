import { ReactNode } from "react"

const card = ({ children }: { children: ReactNode }) => {
    return <div className="flex px-100 py-100 m-20 bg-slate-100 justify-center justify-items-center  border-black md:rounded-md sm:rounded-sm lg:rounded-lg md:shadow-md lg:shadow-lg sm:shadow-sm">
        {children}
    </div>
}

export default card;