export default function Footer() {
    return <div className="flex justify-between text-neutral-400 uppercase text-xs font-mono mx-12">
        <span className="">&copy; Viking Hacks {new Date().getFullYear()}</span>
        <span className="">Site by Eric Lan</span>
    </div>
}