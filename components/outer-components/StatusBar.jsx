import {
	VscRemote,
	VscSourceControl,
	VscSync,
	VscError,
	VscWarning,
	VscHistory,
	VscCopilot,
	VscBroadcast,
	VscCheck,
	VscBellDot,
} from "react-icons/vsc"

export default function StatusBar() {
	return (
		<div className="h-6 min-w-full flex items-center justify-between bg-vs-dark-gray text-white rounded-b-md">
			{/** */}
			{/** Status Bar Left Section */}
			{/** */}
			<div className="h-full w-8 flex items-center justify-center gap-2 bg-vsblue-500">
				<VscRemote className="text-sm text-white" />
			</div>
			{/** */}
			{/** Status Bar Right Section */}
			{/** */}
			<div>test</div>
		</div>
	)
}
