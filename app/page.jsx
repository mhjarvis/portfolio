import TopBar from "@/components/outer-components/TopBar"
import SideBar from "@/components/outer-components/SideBar"

export default function Home() {
	return (
		<main className="flex flex-col h-screen bg-gray-100 text-white ">
			<TopBar />
			<SideBar />
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
