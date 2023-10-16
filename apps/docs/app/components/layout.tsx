export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="w-64">side bar</div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
