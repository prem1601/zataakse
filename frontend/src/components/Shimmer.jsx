const Shimmer = () => {
  const arr = Array.from(Array(8).keys());

  return (
    <div className="h-[40rem]">
      <div className="px-6 py-4 max-w-screen-xl mx-auto">
        <div className="flex flex-wrap">
          <div className=" basis-1/4">
            <div className="py-3">
              <ul>
                {arr.map((d) => (
                  <li key={d} className="p-2 bg-slate-200 my-1" />
                ))}
              </ul>
            </div>
            <div className="py-3">
              <ul>
                {arr.map((d) => (
                  <li key={d} className="p-2 bg-slate-200 my-1" />
                ))}
              </ul>
            </div>
            <div className="py-3">
              <ul>
                {arr.map((d) => (
                  <li key={d} className="p-2 bg-slate-200 my-1" />
                ))}
              </ul>
            </div>
          </div>
          <div className="basis-3/4 p-4">
            <div className="flex justify-between">
              <p className="p-2 px-8 bg-slate-200" />
              <div>
                <p className="p-2 px-8 bg-slate-200" />
              </div>
            </div>
            <div className="flex flex-wrap">
              {arr.map((prod) => (
                <div key={prod} className=" basis-1/3 p-2">
                  <div className="mb-2 h-[10rem]">
                    <div className="p-1 bg-slate-200 h-full">
                      <div className=" flex flex-col gap-1 ps-2">
                        <p className="text-slate-400 text-md"></p>
                        <h4 className="text-lg font-bold"></h4>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
