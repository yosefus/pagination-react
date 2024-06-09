import UserTable from "./components/UserTable";


export default function App() {
   return (
      <div>
         <header className="p-4 text-center">
            <h1 className="text-xl font-bold font-mono">Users Table</h1>
         </header>
         <main className="p-4">
            <UserTable />
         </main>
      </div>
   )
}
