import SideNav from "../ui/invoices/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col xl:flex-row overflow-hidden">
      <div>
        <SideNav />
      </div>
      <div>{children}</div>
    </div>
  );
}
