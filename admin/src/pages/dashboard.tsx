import Navbar from "../components/layout/navbar";

export default function dashboard() {
  return (
    <div className="bg-[#F5F8FE] h-full w-full">
      <div className="mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[15px]">
        <div className="h-full">
          <Navbar title="Main Dashboard" />

          <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
            <div>
              <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
                <div className="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 !flex-row flex-grow items-center rounded-[20px] border-solid border-2 border-sky-500">
                  <h1>Test</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
