import MenuBar from "@/components/outer-components/MenuBar"
import ActivityBar from "@/components/outer-components/ActivityBar"
import StatusBar from "@/components/outer-components/StatusBar"

export default function Home() {
	return (
		<main className="flex flex-col h-screen bg-gray-100 text-white ">
			<MenuBar />
			<div className="flex flex-1 overflow-hidden">
				<ActivityBar />
			</div>
			<StatusBar />
		</main>
	)
}

/* 
		<main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 px-4">
			<h1 className="text-4xl font-bold mb-4 text-center">
				Welcome to My Site
			</h1>
			<p className="text-lg text-center max-w-xl mb-6">
				This is a simple Next.js homepage styled with Tailwind CSS. You can
				start customizing it to build your own amazing project.
			</p>
			<a
				href="/about"
				className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
			>
				Learn More
			</a>
		</main> */
