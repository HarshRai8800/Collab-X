interface DashboardShellProps {
  children?: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="grid items-start gap-8 p-4 sm:p-6 md:p-8">
      {children}
    </div>
  )
}