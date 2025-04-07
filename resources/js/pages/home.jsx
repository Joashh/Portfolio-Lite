import Profile from "../components/profile.jsx";
import Navigation from "../components/navigation.jsx";
import Quotation from "../components/quotation.jsx";
import Showcase from "../components/showcase.jsx";
import Tracer from "../components/tracer.jsx";
export default function Home() {
    return (
        <>
            <div className="min-h-screen flex flex-col ">

                <div className="p-4 pb-2 flex gap-4">

                    <div className="flex-1 max-w-100">
                        <Profile />
                    </div>

                    <div className="flex-1">
                        <Quotation />
                    </div>
                </div>

                <Tracer />

                <div className="pl-4 pr-4 pt-2 w-full flex gap-4 flex-1 ">

                    <div className="flex-1">
                        <Navigation />
                    </div>

                    {/* Ensure Showcase container takes full width */}
                    <div className="bg-gray-800 rounded-md scrollbar-custom flex-grow overflow-y-auto max-h-[calc(100vh-200px)]"> {/* Adjust 200px as needed */}
                        <Showcase />
                    </div>
                </div>
            </div>
        </>
    );
}
