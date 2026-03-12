import ThemeToggle from "@/components/ThemeToggle";

export default function Page() {
  return (
    <div>
      <ThemeToggle />

      <div className="flex h-screen w-screen items-center justify-center">
        {/* <div className="m-4 h-40 w-40 rounded-tl-2xl border-4 bg-amber-100 p-4 outline-2 outline-offset-2 outline-amber-200 outline-dashed"></div> */}
        {/* <div className="m-4 h-40 w-40 rounded-tl-2xl bg-amber-100 p-4 shadow-2xl shadow-amber-200"></div> */}
        <div className="h-32 w-32 rounded-xl bg-red-300 dark:xl:bg-red-500/10"></div>
      </div>
    </div>
  );
}
