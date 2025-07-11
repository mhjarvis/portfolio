import { VscChromeMinimize } from "react-icons/vsc"
import { IoCloseOutline } from "react-icons/io5"
import { RiExpandLeftRightFill } from "react-icons/ri"

export default function TopBar() {
	return (
		<div className="h-8 px-3 flex items-center justify-between bg-vs-light-gray text-white rounded-t-md">
			{/* */}
			{/* Close, Minimize, Expand Buttons */}
			{/* */}
			<div className="group flex gap-2">
				<div className="relative w-3 h-3 bg-vs-red rounded-lg cursor-default">
					<span className="hidden group-hover:flex absolute inset-0 items-center justify-center text-xs text-gray-700">
						<IoCloseOutline className="w-3" />
					</span>
				</div>
				<div className="relative w-3 h-3 bg-vs-yellow rounded-lg cursor-default">
					<span className="hidden group-hover:flex absolute inset-0 items-center justify-center text-xs text-gray-700">
						<VscChromeMinimize className="w-3" />
					</span>
				</div>{" "}
				<div className="relative w-3 h-3 bg-vs-green rounded-lg cursor-default">
					<span className="hidden group-hover:flex absolute inset-0 items-center justify-center text-xs text-gray-700 ">
						<RiExpandLeftRightFill className="w-3 rotate-45" />
					</span>
				</div>
			</div>
			<div className="flex gap-4">
				<div>arrows</div>
				<div>search</div>
				<div>chat</div>
			</div>
			<div className="">layouticons</div>
		</div>
	)
}
