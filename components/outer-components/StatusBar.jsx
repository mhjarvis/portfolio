import {
	VscRemote,
	VscSourceControl,
	VscSync,
	VscError,
	VscWarning,
	VscHistory,
	VscJson,
	VscCopilot,
	VscBroadcast,
	VscCheck,
	VscBellDot,
} from "react-icons/vsc"
import { LuAsterisk } from "react-icons/lu"

export default function StatusBar() {
	return (
		<div className="h-6 w-full flex items-center bg-vs-dark-gray text-white rounded-b-md px-2">
			{/* Left Section – fixed size, doesn't shrink */}
			<div className="h-full flex items-center gap-5 flex-shrink-0 mr-10">
				<div className="h-full w-8 flex items-center justify-center bg-vsblue-500">
					<VscRemote className="text-sm text-white" />
				</div>
				<div className="flex items-center gap-1">
					<VscSourceControl className="text-sm text-gray-400" />
					<div className="text-[12px] text-gray-400">main</div>
					<LuAsterisk className="text-[9px] ml-[-5px] mt-[-5px] text-gray-400" />
					<VscSync className="text-sm text-gray-400" />
				</div>
				<div className="flex items-center gap-1">
					<VscError className="text-sm text-gray-400" />
					<div className="text-[12px] text-gray-400">0</div>
					<VscWarning className="text-sm text-gray-400" />
					<div className="text-[12px] text-gray-400">1</div>
				</div>
				<div className="flex items-center gap-1">
					<VscHistory className="text-sm text-gray-400" />
					<div className="text-[12px] text-gray-400">52 mins</div>
				</div>
			</div>

			{/* Right Section – fills remaining space, hides overflow */}
			<div className="h-full flex-1 flex items-center gap-5 justify-end overflow-hidden">
				<div className="flex items-center gap-1 whitespace-nowrap text-[12px] text-gray-400">
					Ln 47, Col 74
				</div>
				<div className="flex items-center gap-1 whitespace-nowrap text-[12px] text-gray-400">
					Spaces: 4
				</div>
				<div className="flex items-center gap-1 whitespace-nowrap text-[12px] text-gray-400">
					UTF-8
				</div>
				<div className="flex items-center gap-1 whitespace-nowrap text-[12px] text-gray-400">
					<VscJson className="text-sm" />
					JavaScript JSX
				</div>
				<div className="flex items-center gap-1">
					<VscCopilot className="text-sm text-gray-400" />
				</div>
				<div className="flex items-center gap-1 whitespace-nowrap text-[12px] text-gray-400">
					<VscBroadcast className="text-sm" />
					Go Live
				</div>
				<div className="flex items-center gap-1 whitespace-nowrap text-[12px] text-gray-400">
					<VscCheck className="text-sm" />
					Prettier
				</div>
				<div className="flex items-center gap-1">
					<VscBellDot className="text-sm text-gray-400" />
				</div>
			</div>
		</div>
	)
}
