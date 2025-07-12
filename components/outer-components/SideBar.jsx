import { VscFiles } from "react-icons/vsc"
import { VscSearch } from "react-icons/vsc"
import { VscSourceControl } from "react-icons/vsc"
import { VscDebugAlt } from "react-icons/vsc"
import { VscExtensions } from "react-icons/vsc"
import { VscRemoteExplorer } from "react-icons/vsc"
import { VscAccount } from "react-icons/vsc"
import { VscSettingsGear } from "react-icons/vsc"

export default function SideBar() {
	return (
		<div className="h-screen w-12 flex flex-col items-center justify-between py-4 bg-vs-light-gray">
			<div>
				<VscFiles className="text-2xl text-vs-gray-100" />
				<VscSearch className="text-2xl text-vs-gray-100 mt-4" />
			</div>
			<div>
				<VscAccount className="text-2xl text-vs-gray-100 mt-4" />
				<VscSettingsGear className="text-2xl text-vs-gray-100 mt-4" />
			</div>
		</div>
	)
}
