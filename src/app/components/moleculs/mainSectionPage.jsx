export default function MainSectionPage({ title, description }) {
    return (
        <div className="w-full py-10 px-5 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl">
            <div className="flex flex-col items-center space-y-3 text-center">
                <h1 className="text-3xl font-bold text-white">{title}</h1>
                <p className="text-md text-white">{description}</p>
            </div>
        </div>
    );
}