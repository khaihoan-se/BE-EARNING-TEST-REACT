import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { routes } from "./routes";
import Loading from "./components/Loading";
import TopBar from "./components/TopBar";
import NotFound from './components/NotFound'

const App = () => {
   return (
      <React.Fragment>
         <div className="w-[100vw] h-[100vh] flex items-center justify-center relative">
            <Suspense fallback={<Loading />}>
               <div id="hidden_scroll" className="no--scrollbar w-[375px] h-[650px] border-gray-300 border-[1px] rounded-md relative bg-white overflow-auto">
                  <TopBar />
                  <Routes>
                     {routes.map((e) => (
                        <Route key={e.path} path={e.path} element={<e.component />} />
                     ))}
                     <Route path="*" element={<NotFound />}></Route>
                  </Routes>
               </div>
            </Suspense>
         </div>
      </React.Fragment>
   )
}

export default App