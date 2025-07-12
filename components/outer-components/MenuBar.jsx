import {
	VscChromeClose,
	VscChromeMinimize,
	VscArrowLeft,
	VscArrowRight,
	VscSearch,
	VscCopilot,
	VscChevronDown,
	VscLayout,
	VscLayoutSidebarRight,
	VscLayoutPanelOff,
	VscLayoutSidebarRightOff,
} from "react-icons/vsc"
import { RiExpandLeftRightFill } from "react-icons/ri"

export default function MenuBar() {
	return (
		<div className="h-10 px-3 flex items-center justify-between bg-vs-light-gray text-white rounded-t-md">
			{/* */}
			{/* Close, Minimize, Expand Buttons */}
			{/* */}
			<div className="group flex gap-2">
				<div className="relative w-3 h-3 bg-vs-red rounded-lg cursor-default">
					<span className="hidden group-hover:flex absolute inset-0 items-center justify-center text-xs text-gray-800">
						<VscChromeClose className="w-2" />
					</span>
				</div>
				<div className="relative w-3 h-3 bg-vs-yellow rounded-lg cursor-default">
					<span className="hidden group-hover:flex absolute inset-0 items-center justify-center text-xs text-gray-800">
						<VscChromeMinimize className="w-2" />
					</span>
				</div>{" "}
				<div className="relative w-3 h-3 bg-vs-green rounded-lg cursor-default">
					<span className="hidden group-hover:flex absolute inset-0 items-center justify-center text-xs text-gray-800 ">
						<RiExpandLeftRightFill className="w-2 rotate-45" />
					</span>
				</div>
			</div>
			{/* */}
			{/* Search Icon, Arrows, Copilot Icon */}
			{/* */}
			<div className="flex items-center gap-4">
				<VscArrowLeft className="text-lg text-gray-500 hover:text-gray-300 cursor-pointer" />
				<VscArrowRight className=" text-lg text-gray-500 hover:text-gray-300 cursor-pointer" />
				<div className="w-[30vw] h-6 flex items-center justify-center gap-2 bg-vs-gray-300 border-[.5px] border-gray-500 rounded-md">
					<VscSearch className="text-sm text-gray-500" />
					<p className="text-xs text-gray-300">portfolio</p>
				</div>
				<div className="flex items-center justify-center gap-1">
					<VscCopilot className="text-gray-300 text-md" />
					<VscChevronDown className="text-gray-300 text-sm" />
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
