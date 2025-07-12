import { VscFiles } from "react-icons/vsc"
import { VscSearch } from "react-icons/vsc"
import { VscSourceControl } from "react-icons/vsc"
import { VscDebugAlt } from "react-icons/vsc"
import { VscExtensions } from "react-icons/vsc"
import { VscRemoteExplorer } from "react-icons/vsc"
import { VscAccount } from "react-icons/vsc"
import { VscSettingsGear } from "react-icons/vsc"

export default function ActivityBar() {
	return (
		<div className="h-full w-11 flex flex-col items-center justify-between py-4 bg-vs-light-gray">
			<div className="flex flex-col items-center gap-2">
				<VscFiles className="text-xl text-vs-gray-200 hover:text-gray-100" />
				<VscSearch className="text-xl text-vs-gray-200 mt-4 hover:text-gray-100" />
				<VscSourceControl className="text-xl text-vs-gray-200 mt-4 hover:text-gray-100" />
				<VscDebugAlt className="text-xl text-vs-gray-200 mt-4 hover:text-gray-100" />
				<VscExtensions className="text-xl text-vs-gray-200 mt-4 hover:text-gray-100" />
				<VscRemoteExplorer className="text-xl text-vs-gray-200 mt-4 hover:text-gray-100" />
			</div>
			<div>
				<VscAccount className="text-xl text-vs-gray-200 mt-4 hover:text-gray-100" />
				<VscSettingsGear className="text-xl text-vs-gray-200 mt-4 hover:text-gray-100" />
			</div>
		</div>
	)
}
