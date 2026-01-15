import Other from "./Skills/Other"
import Learning from "./Skills/Learning"
import Using from "./Skills/Using"

const Skills = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-10">
            <h2 className="px-15 py-4 text-xl border-4 border-white tracking-[0.3em]">SKILLS</h2>
            <div className="flex flex-col gap-15">
                <div className="flex flex-col gap-10">
                    <h1 className="text-2xl font-semibold tracking-[0.2em]">USING NOW:</h1>
                    <Using />
                </div>
                <div className="flex flex-col gap-10">
                    <h1 className="text-2xl font-semibold tracking-[0.2em]">LEARNING:</h1>
                    <Learning />
                </div>
                <div className="flex flex-col gap-10">
                    <h1 className="text-2xl font-semibold tracking-[0.2em]">OTHER SKILLS:</h1>
                    <Other />
                </div>
            </div>
        </div>
    )
}

export default Skills