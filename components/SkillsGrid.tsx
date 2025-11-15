interface Skill {
  name: string
  percentage: number
  icon: string
}

const skills: Skill[] = [
  { name: 'Javascript', percentage: 95, icon: 'JS' },
  { name: 'Typescript', percentage: 80, icon: 'TS' },
  { name: 'React JS', percentage: 90, icon: 'React' },
  { name: 'Next JS', percentage: 85, icon: 'Next' },
  { name: 'Figma', percentage: 90, icon: 'Figma' },
]

function CircularProgressBar({ percentage, name, icon }: Skill) {
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28">
        {/* Background circle */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-gray-200 dark:text-gray-500"
          />
          {/* Progress circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="text-sky-500 transition-all duration-500"
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-sky-500">{percentage}%</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{icon}</span>
        </div>
      </div>
      <p className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
        {name}
      </p>
    </div>
  )
}

export default function SkillsGrid() {
  return (
    <div className="mt-16">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Skills & Proficiency
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
        {skills.map((skill) => (
          <CircularProgressBar
            key={skill.name}
            name={skill.name}
            percentage={skill.percentage}
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  )
}
