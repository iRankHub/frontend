import Image from "next/image";

export const NoRankingDisplay = () => (
  <div className="flex flex-col items-center justify-center h-screen max-w-md mx-auto text-center px-4">
    <div className="w-52 h-52 relative">
      <Image
        src="/static/images/no-rankings.png"
        alt="Rankings Placeholder"
        fill
      />
    </div>
    <h2 className="mt-5 text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
      No Ranking Information Available
    </h2>
  </div>
);
