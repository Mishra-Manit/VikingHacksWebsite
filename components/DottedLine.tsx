// this took forever
export default function DottedLine() {
    return <div className="flex flex-col items-center -mx-24">
        <div className="border-t-[0.13rem] flex justify-between border-dashed border-neutral-700 w-full">
            <div className="bg-neutral-400 -mt-[0.3rem] ml-[2.75rem] h-2 w-2"></div>
            <div className="bg-neutral-400 -mt-[0.3rem] mr-[2.75rem] h-2 w-2"></div>
        </div>
    </div>
}