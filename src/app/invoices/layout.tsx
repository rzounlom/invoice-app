import SideNav from "../ui/invoices/sidenav";

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col xl:flex-row">
      <div>
        <SideNav />
      </div>
      <div>{children}</div>
    </div>
  );
}
