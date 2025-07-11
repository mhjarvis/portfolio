import { VscChromeMinimize } from "react-icons/vsc"
import { IoCloseOutline } from "react-icons/io5"
import { RiExpandLeftRightFill } from "react-icons/ri"
import { GoArrowLeft } from "react-icons/go"
import { GoArrowRight } from "react-icons/go"
import { RxMagnifyingGlass } from "react-icons/rx"
import { RiCopilotFill } from "react-icons/ri"
import { IoChevronDown } from "react-icons/io5"
import { VscLayout } from "react-icons/vsc"
import { VscLayoutSidebarRight } from "react-icons/vsc"
import { VscLayoutPanelOff } from "react-icons/vsc"
import { VscLayoutSidebarRightOff } from "react-icons/vsc"

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
			{/* */}
			{/* Search Icon, Arrows, Copilot Icon */}
			{/* */}
			<div className="flex items-center gap-4">
				<GoArrowLeft className="text-xl text-gray-500 hover:text-gray-300 cursor-pointer" />
				<GoArrowRight className=" text-xl text-gray-500 hover:text-gray-300 cursor-pointer" />
				<div className="w-[30vw] h-5 flex items-center justify-center gap-1 bg-vs-gray-300 rounded-md">
					<RxMagnifyingGlass className="text-lg text-gray-500 rotate-90" />
					<p className="text-xs text-gray-300">portfolio</p>
				</div>
				<div className="flex items-center justify-center gap-1">
					<RiCopilotFill className="text-gray-300 text-lg" />
					<IoChevronDown className="text-gray-300 text-sm" />
				</div>
			</div>
			{/* */}
			{/* Layout Icons */}
			{/* */}
			<div className="flex gap-3">
				<VscLayout className="text-gray-300" />
				<VscLayoutSidebarRight className="text-gray-300 rotate-180" />
				<VscLayoutPanelOff className="text-gray-300" />
				<VscLayoutSidebarRightOff className="text-gray-300" />
			</div>
		</div>
	)
}
