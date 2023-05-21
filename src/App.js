// import { Outlet } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { AuthContextProvider } from "./context/AuthContext";
// import Navbar from "./components/Navbar";

// const queryClient = new QueryClient();
// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <AuthContextProvider>
//         <Navbar />
//         <Outlet />
//       </AuthContextProvider>
//     </QueryClientProvider>
//   );
// }

// export default App;

import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <div className="flex">
          <div className="w-1/5 mt-40">
            <Navbar />
          </div>
          <div className="w-4/5 bg-orange-200 h-screen">
            <Outlet />
          </div>
        </div>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
